import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js6s8rg9f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js6s8rg9f"/>`,
		"fallback": "material-icon-theme:replit",
	});
}

export default Component;
