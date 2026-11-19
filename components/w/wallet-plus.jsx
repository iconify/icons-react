import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_9hczfll.css';
import '../../css/u/uf8mm-b2b.css';
import '../../css/v/v6-odob5a.css';
import '../../css/v/vgzrscbzm.css';
import '../../css/r/rcvavhk-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_9hczfll"/><path class="uf8mm-b2b"/><path class="v6-odob5a"/><path class="vgzrscbzm"/><path class="rcvavhk-q"/></g>`,
		"fallback": "andrsrxn:wallet-plus",
	});
}

export default Component;
