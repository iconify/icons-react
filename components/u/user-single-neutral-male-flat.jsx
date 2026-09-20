import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fesalob6t.css';
import '../../css/c/c20jyxb8g.css';
import '../../css/x/x6llrnb-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fesalob6t"/><path class="c20jyxb8g"/><path clip-rule="evenodd" class="x6llrnb-k"/></g>`,
		"fallback": "streamline-color:user-single-neutral-male-flat",
	});
}

export default Component;
