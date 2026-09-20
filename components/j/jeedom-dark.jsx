import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw6zjlbtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw6zjlbtb"/>`,
		"fallback": "selfhst:jeedom-dark",
	});
}

export default Component;
