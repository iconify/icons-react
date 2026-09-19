import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef9rq8zxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ef9rq8zxh"/>`,
		"fallback": "healthicons:ppe-face-mask2x-outline",
	});
}

export default Component;
