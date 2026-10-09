import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kecam2bme.css';
import '../../css/d/duw87ybvv.css';
import '../../css/z/zyyp67_ey.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kecam2bme"/><path class="duw87ybvv"/><path class="zyyp67_ey"/>`,
		"fallback": "energy-icons:sprout-20-bold",
	});
}

export default Component;
