import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avl6-q8xz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avl6-q8xz"/>`,
		"fallback": "bi:volume-mute",
	});
}

export default Component;
