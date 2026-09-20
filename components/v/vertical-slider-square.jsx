import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dh3moebjg.css';
import '../../css/r/rm_-jac6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dh3moebjg"/><path class="rm_-jac6o"/></g>`,
		"fallback": "streamline:vertical-slider-square",
	});
}

export default Component;
