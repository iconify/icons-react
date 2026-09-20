import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2jtvjb0q.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2jtvjb0q"/>`,
		"fallback": "osmic:saddle-10",
	});
}

export default Component;
