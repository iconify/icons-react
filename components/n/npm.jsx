import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylkih6j-h.css';

const viewBox = {"width":430,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylkih6j-h"/>`,
		"fallback": "file-icons:npm",
	});
}

export default Component;
