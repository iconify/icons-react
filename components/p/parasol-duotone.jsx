import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx8smgb6j.css';
import '../../css/z/zo-ctpbkz.css';
import '../../css/e/e8eqn_7bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tx8smgb6j"/><path class="zo-ctpbkz"/><path class="e8eqn_7bl"/></g>`,
		"fallback": "lucide-extended:parasol-duotone",
	});
}

export default Component;
