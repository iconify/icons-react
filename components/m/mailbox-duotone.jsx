import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_p3zv2qb.css';
import '../../css/y/yyeznrbrj.css';
import '../../css/r/rh9k3tbfh.css';
import '../../css/t/t7espybpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_p3zv2qb"/><path class="yyeznrbrj"/><path class="rh9k3tbfh"/><path class="t7espybpt"/></g>`,
		"fallback": "lucide-extended:mailbox-duotone",
	});
}

export default Component;
