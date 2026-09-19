import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el8e7murg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el8e7murg"/>`,
		"fallback": "catppuccin:plantuml",
	});
}

export default Component;
