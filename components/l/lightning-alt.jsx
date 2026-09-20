import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9800dbtz.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9800dbtz"/>`,
		"fallback": "system-uicons:lightning-alt",
	});
}

export default Component;
