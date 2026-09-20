import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jdonzhbqz.css';
import '../../css/v/vp9r_e3lo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jdonzhbqz"/><path class="vp9r_e3lo"/></g>`,
		"fallback": "streamline:toilet-women",
	});
}

export default Component;
