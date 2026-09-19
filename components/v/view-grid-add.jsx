import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj8efxbhv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj8efxbhv"/>`,
		"fallback": "heroicons-solid:view-grid-add",
	});
}

export default Component;
