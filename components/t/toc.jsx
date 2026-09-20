import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fikox4b0u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fikox4b0u"/>`,
		"fallback": "material-icon-theme:toc",
	});
}

export default Component;
