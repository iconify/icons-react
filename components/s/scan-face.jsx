import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-z7v-b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-z7v-b1t"/>`,
		"fallback": "boxicons:scan-face",
	});
}

export default Component;
