import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpirlyb4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpirlyb4d"/>`,
		"fallback": "qlementine-icons:search-16",
	});
}

export default Component;
