import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co35akbjw.css';
import '../../css/q/qeed53eod.css';
import '../../css/s/sdt-pfbqk.css';
import '../../css/y/ylx4kdm0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co35akbjw"/><path class="qeed53eod"/><path class="sdt-pfbqk"/><path class="ylx4kdm0n"/></g>`,
		"fallback": "tdesign:shop-5",
	});
}

export default Component;
