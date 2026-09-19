import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e31ph7fnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e31ph7fnz"/>`,
		"fallback": "hugeicons:usb-memory-02",
	});
}

export default Component;
