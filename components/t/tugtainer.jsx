import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8l_-fb_k.css';
import '../../css/j/js4-qccyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8l_-fb_k"/><path class="js4-qccyb"/>`,
		"fallback": "selfhst:tugtainer",
	});
}

export default Component;
