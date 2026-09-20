import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txdb3ibas.css';
import '../../css/o/o4kqs_lel.css';
import '../../css/q/qh_n9ob1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txdb3ibas"/><path class="o4kqs_lel"/><path class="qh_n9ob1h"/></g>`,
		"fallback": "streamline-cyber-color:maintenance",
	});
}

export default Component;
