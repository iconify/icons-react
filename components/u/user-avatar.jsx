import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/c/ch7mim7_x.css';
import '../../css/g/gh16dbbue.css';
import '../../css/l/lxhba64ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="ch7mim7_x"/><path class="gh16dbbue"/><path class="lxhba64ej"/></g>`,
		"fallback": "tdesign:user-avatar",
	});
}

export default Component;
