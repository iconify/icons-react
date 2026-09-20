import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0td5dbhn.css';
import '../../css/q/qfluk7b_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0td5dbhn"/><path clip-rule="evenodd" class="qfluk7b_z"/>`,
		"fallback": "qlementine-icons:warning-16",
	});
}

export default Component;
