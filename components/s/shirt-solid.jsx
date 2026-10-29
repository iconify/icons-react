import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zld1hq7zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zld1hq7zb"/>`,
		"fallback": "withicons:shirt-solid",
	});
}

export default Component;
