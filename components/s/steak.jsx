import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh9lh0baw.css';
import '../../css/h/hxw74nbqd.css';
import '../../css/a/aaqnicbbm.css';
import '../../css/s/sov5albwp.css';
import '../../css/w/wo44elbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qh9lh0baw"/><ellipse transform="rotate(113.9 6.5 11.17)skewX(-.13)" class="hxw74nbqd"/><path class="aaqnicbbm"/><path class="sov5albwp"/><ellipse transform="rotate(104.88 6.04 12.17)skewX(-.08)" class="wo44elbpz"/></g>`,
		"fallback": "andrsrxn:steak",
	});
}

export default Component;
