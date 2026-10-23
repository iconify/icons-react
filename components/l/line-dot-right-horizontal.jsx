import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7fa6mi_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7fa6mi_k"/>`,
		"fallback": "vadivam:line-dot-right-horizontal",
	});
}

export default Component;
