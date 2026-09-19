import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2j5eub2w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2j5eub2w"/>`,
		"fallback": "fa7-solid:people-line",
	});
}

export default Component;
