import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuc8vt4xo.css';
import '../../css/r/rd91urb1p.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 vuc8vt4xo"/><path class="clr-i-outline clr-i-outline-path-2 rd91urb1p"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:volume-down-line",
	});
}

export default Component;
