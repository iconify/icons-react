import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/s/s6te4phsj.css';
import '../../css/k/ksny4_a1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="s6te4phsj"/><path class="ksny4_a1d"/></g>`,
		"fallback": "lucide-extended:square-arrow-down-duotone",
	});
}

export default Component;
