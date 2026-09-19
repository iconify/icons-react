import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxr4c1iyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxr4c1iyw"/>`,
		"fallback": "eva:npm-fill",
	});
}

export default Component;
