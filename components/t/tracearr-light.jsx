import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4jpk8bpd.css';
import '../../css/r/rwmxrkntq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4jpk8bpd"/><path class="rwmxrkntq"/>`,
		"fallback": "selfhst:tracearr-light",
	});
}

export default Component;
