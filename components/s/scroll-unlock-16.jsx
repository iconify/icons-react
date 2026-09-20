import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3wopibcf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3wopibcf"/>`,
		"fallback": "qlementine-icons:scroll-unlock-16",
	});
}

export default Component;
