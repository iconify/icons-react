import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xzi62pqbj.css';
import '../../css/h/hmocrmbht.css';
import '../../css/a/am_q_ho_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xzi62pqbj"/><path class="hmocrmbht"/><path class="am_q_ho_c"/></g>`,
		"fallback": "streamline-freehand-color:money-coin-stack",
	});
}

export default Component;
