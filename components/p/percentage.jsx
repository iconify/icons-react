import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3ejxbqwu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3ejxbqwu"/>`,
		"fallback": "fa-solid:percentage",
	});
}

export default Component;
