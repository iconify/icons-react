import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzviopblm.css';
import '../../css/i/inq_0bbzz.css';
import '../../css/e/elablv1yg.css';
import '../../css/r/rtqak74-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzviopblm"/><path class="inq_0bbzz"/><path clip-rule="evenodd" class="elablv1yg"/><path class="rtqak74-b"/>`,
		"fallback": "mingcute:ios-line",
	});
}

export default Component;
