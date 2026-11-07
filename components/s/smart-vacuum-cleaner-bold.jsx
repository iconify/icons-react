import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql3j78bhl.css';
import '../../css/u/ueez_60su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql3j78bhl"/><path clip-rule="evenodd" class="ueez_60su"/>`,
		"fallback": "solar:smart-vacuum-cleaner-bold",
	});
}

export default Component;
