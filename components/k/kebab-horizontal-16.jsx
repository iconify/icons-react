import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd9rnlwhz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd9rnlwhz"/>`,
		"fallback": "octicon:kebab-horizontal-16",
	});
}

export default Component;
