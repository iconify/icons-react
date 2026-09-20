import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiyiglb7q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiyiglb7q"/>`,
		"fallback": "lsicon:motorcycle-outline",
	});
}

export default Component;
