import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6-40m8xj.css';
import '../../css/h/hvxgnmdxq.css';
import '../../css/q/qsa_qebbh.css';
import '../../css/b/bkq4_lb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v6-40m8xj"/><path class="hvxgnmdxq"/><path class="qsa_qebbh"/><path class="bkq4_lb6n"/></g>`,
		"fallback": "andrsrxn:money-transfer",
	});
}

export default Component;
