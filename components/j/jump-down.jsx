import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shfcvx8wr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shfcvx8wr"/>`,
		"fallback": "system-uicons:jump-down",
	});
}

export default Component;
