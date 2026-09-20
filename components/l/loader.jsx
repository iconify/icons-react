import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e42c3dbwy.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e42c3dbwy"/>`,
		"fallback": "system-uicons:loader",
	});
}

export default Component;
