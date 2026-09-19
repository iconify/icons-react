import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7j0lof8s.css';

const viewBox = {"width":576,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7j0lof8s"/>`,
		"fallback": "ls:paperboy",
	});
}

export default Component;
