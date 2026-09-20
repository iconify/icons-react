import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5-vgbsm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5-vgbsm"/>`,
		"fallback": "pinhead:pen-nib",
	});
}

export default Component;
