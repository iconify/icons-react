import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujmo2hbmc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujmo2hbmc"/>`,
		"fallback": "codicon:refresh",
	});
}

export default Component;
