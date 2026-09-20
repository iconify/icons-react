import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_9orj6ev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_9orj6ev"/>`,
		"fallback": "selfhst:ubiquiti-unifi-dark",
	});
}

export default Component;
