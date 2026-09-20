import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2f_bdb6f.css';
import '../../css/t/took1svyo.css';
import '../../css/q/q19_43bga.css';
import '../../css/q/qe9vangyv.css';
import '../../css/k/kbgytebxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2f_bdb6f"/><path class="took1svyo"/><path class="q19_43bga"/><path class="qe9vangyv"/><path class="kbgytebxp"/></g>`,
		"fallback": "streamline-ultimate-color:skateboard-person",
	});
}

export default Component;
