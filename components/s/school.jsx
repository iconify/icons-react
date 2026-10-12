import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jen_rgbes.css';
import '../../css/t/t-0thacvy.css';
import '../../css/a/a37vbsb7y.css';
import '../../css/o/oy3iqabzh.css';
import '../../css/v/vgxzr9bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jen_rgbes"/><path class="t-0thacvy"/><path class="a37vbsb7y"/><path class="oy3iqabzh"/><ellipse class="vgxzr9bwt"/></g>`,
		"fallback": "andrsrxn:school",
	});
}

export default Component;
