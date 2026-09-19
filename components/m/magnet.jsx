import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx3o0m84v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx3o0m84v"/>`,
		"fallback": "at-icons:magnet",
	});
}

export default Component;
