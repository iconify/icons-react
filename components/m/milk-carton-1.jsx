import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvet31q4q.css';
import '../../css/v/v_3fbcb-v.css';
import '../../css/x/xztatfo0b.css';
import '../../css/c/cebv96buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bvet31q4q"/><path class="v_3fbcb-v"/><path class="xztatfo0b"/><path class="cebv96buh"/></g>`,
		"fallback": "streamline-cyber-color:milk-carton-1",
	});
}

export default Component;
