import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdg9x3jpg.css';

const viewBox = {"width":758,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdg9x3jpg"/>`,
		"fallback": "ls:ltthon",
	});
}

export default Component;
