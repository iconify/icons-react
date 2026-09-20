import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuedzebvj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuedzebvj"/>`,
		"fallback": "system-uicons:trash",
	});
}

export default Component;
