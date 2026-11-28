import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/a/af2wjebts.css';
import '../../css/q/qn_wowpex.css';
import '../../css/x/xnsqplbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="af2wjebts"/><path class="qn_wowpex"/><path class="xnsqplbwv"/></g>`,
		"fallback": "iconaut:peace-sign",
	});
}

export default Component;
