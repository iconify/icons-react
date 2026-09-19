import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vy-r30bhj.css';
import '../../css/j/jgs9n-bdg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vy-r30bhj"/><path class="jgs9n-bdg"/></g>`,
		"fallback": "glyphs:sim-card",
	});
}

export default Component;
