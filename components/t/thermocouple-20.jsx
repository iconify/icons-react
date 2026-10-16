import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwc8_0vln.css';
import '../../css/j/jwt9puapv.css';
import '../../css/h/hx1joebdq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwc8_0vln"/><path class="jwt9puapv"/><path class="hx1joebdq"/>`,
		"fallback": "energy-icons:thermocouple-20",
	});
}

export default Component;
