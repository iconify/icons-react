import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy4eacc9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy4eacc9q"/>`,
		"fallback": "qlementine-icons:mouse-cursor-16",
	});
}

export default Component;
