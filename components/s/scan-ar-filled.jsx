import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nth2ntb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nth2ntb9j"/>`,
		"fallback": "boxicons:scan-ar-filled",
	});
}

export default Component;
