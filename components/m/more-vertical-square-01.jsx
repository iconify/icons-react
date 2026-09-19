import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztu35ibxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztu35ibxr"/>`,
		"fallback": "hugeicons:more-vertical-square-01",
	});
}

export default Component;
