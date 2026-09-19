import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g79rgltqv.css';
import '../../css/i/i79d0rboe.css';

const viewBox = {"width":83,"height":82};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g79rgltqv"/><path class="i79d0rboe"/></g>`,
		"fallback": "glyphs-poly:puzzle-piece",
	});
}

export default Component;
