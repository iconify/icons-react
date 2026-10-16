import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1jmijbiu.css';
import '../../css/r/rhggxvbnq.css';
import '../../css/j/j8ife_b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="n1jmijbiu"/><circle class="rhggxvbnq"/><path class="j8ife_b-p"/></g>`,
		"fallback": "andrsrxn:reduce-motion",
	});
}

export default Component;
