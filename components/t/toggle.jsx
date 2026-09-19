import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_s82tbar.css';
import '../../css/g/g46chmbut.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b_s82tbar"/><path class="g46chmbut"/></g>`,
		"fallback": "glyphs:toggle",
	});
}

export default Component;
