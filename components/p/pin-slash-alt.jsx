import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccucf8nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccucf8nmw"/>`,
		"fallback": "boxicons:pin-slash-alt",
	});
}

export default Component;
