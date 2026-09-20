import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v_ed2vbel.css';
import '../../css/h/hjwq-ac-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v_ed2vbel"/><path class="hjwq-ac-k"/></g>`,
		"fallback": "streamline:pathfinder-trim",
	});
}

export default Component;
