import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-ldwrbeq.css';
import '../../css/s/s6te4phsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-ldwrbeq"/><path class="s6te4phsj"/></g>`,
		"fallback": "lucide-extended:panel-top-bottom-dashed-duotone",
	});
}

export default Component;
