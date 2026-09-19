import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki7z1mb1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki7z1mb1q"/>`,
		"fallback": "charm:shield",
	});
}

export default Component;
