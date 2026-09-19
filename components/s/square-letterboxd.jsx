import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajbve8uyk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajbve8uyk"/>`,
		"fallback": "fa7-brands:square-letterboxd",
	});
}

export default Component;
