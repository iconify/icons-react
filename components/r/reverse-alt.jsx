import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk-6hydha.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk-6hydha"/>`,
		"fallback": "system-uicons:reverse-alt",
	});
}

export default Component;
