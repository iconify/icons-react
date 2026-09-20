import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvvlk1fud.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvvlk1fud"/>`,
		"fallback": "la:record-vinyl",
	});
}

export default Component;
