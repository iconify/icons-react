import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3s6o4b0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3s6o4b0m"/>`,
		"fallback": "qlementine-icons:sort-desc-16",
	});
}

export default Component;
