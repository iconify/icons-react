import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2sfcybvh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2sfcybvh"/>`,
		"fallback": "f7:play-rectangle",
	});
}

export default Component;
