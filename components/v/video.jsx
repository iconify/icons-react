import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1c8cdcqe.css';
import '../../css/q/q2vmesbkz.css';
import '../../css/l/lbuviqfzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t1c8cdcqe"/><rect class="q2vmesbkz"/><path class="lbuviqfzi"/></g>`,
		"fallback": "andrsrxn:video",
	});
}

export default Component;
