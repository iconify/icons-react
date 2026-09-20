import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw9ju4b-x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw9ju4b-x"/>`,
		"fallback": "system-uicons:minus",
	});
}

export default Component;
