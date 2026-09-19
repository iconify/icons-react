import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a77_aibhy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a77_aibhy"/>`,
		"fallback": "icons8:up-squared",
	});
}

export default Component;
