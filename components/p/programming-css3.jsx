import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifuwiobgx.css';
import '../../css/t/tpyna9b4s.css';
import '../../css/d/drh67tb_e.css';
import '../../css/o/oll56ab6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifuwiobgx"/><path class="tpyna9b4s"/><path class="drh67tb_e"/><path class="oll56ab6n"/></g>`,
		"fallback": "streamline-cyber-color:programming-css3",
	});
}

export default Component;
