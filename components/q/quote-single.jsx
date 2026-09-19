import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qoe_vw4lx.css';
import '../../css/r/r0m70sbnf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qoe_vw4lx"/><path class="r0m70sbnf"/></g>`,
		"fallback": "glyphs:quote-single",
	});
}

export default Component;
