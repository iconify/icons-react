import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0najsbtj.css';
import '../../css/h/hr1xwpbwv.css';
import '../../css/q/qyj_q3bhs.css';
import '../../css/e/ev58appus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0najsbtj"/><path class="hr1xwpbwv"/><path class="qyj_q3bhs"/><path class="ev58appus"/>`,
		"fallback": "energy-icons:solar-carport-20-bold",
	});
}

export default Component;
