import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-xjt6unr.css';
import '../../css/s/sgj193bua.css';
import '../../css/e/emzmn0o4c.css';
import '../../css/f/fpzasvuqa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-xjt6unr"/><path class="sgj193bua"/><path class="emzmn0o4c"/><path class="fpzasvuqa"/></g>`,
		"fallback": "glyphs:turn-sign-outline",
	});
}

export default Component;
