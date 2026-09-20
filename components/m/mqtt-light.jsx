import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pprnic1yo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pprnic1yo"/>`,
		"fallback": "selfhst:mqtt-light",
	});
}

export default Component;
