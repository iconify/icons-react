import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsvenmjsn.css';
import '../../css/o/oik_dsbct.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/awtcwymkh.css';
import '../../css/q/qk57ujrcz.css';
import '../../css/i/iu92mo3zw.css';
import '../../css/y/ycxj5iv6y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lsvenmjsn"/><path class="oik_dsbct"/><g class="ij2x_72vy"><path class="awtcwymkh"/><path class="qk57ujrcz"/><path class="iu92mo3zw"/><circle class="ycxj5iv6y"/></g>`,
		"fallback": "openmoji:volleyball",
	});
}

export default Component;
