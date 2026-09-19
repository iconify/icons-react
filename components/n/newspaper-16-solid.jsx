import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt6acgbrk.css';
import '../../css/t/tk0tl-b7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt6acgbrk"/><path class="tk0tl-b7v"/>`,
		"fallback": "heroicons:newspaper-16-solid",
	});
}

export default Component;
