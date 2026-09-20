import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjp-q-2bl.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjp-q-2bl"/>`,
		"fallback": "system-uicons:pie-half",
	});
}

export default Component;
