import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4e2zubhe.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4e2zubhe"/>`,
		"fallback": "system-uicons:notebook",
	});
}

export default Component;
