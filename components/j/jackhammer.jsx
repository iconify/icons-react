import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p643z7b_h.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p643z7b_h"/>`,
		"fallback": "picon:jackhammer",
	});
}

export default Component;
