import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgedu3jvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgedu3jvo"/>`,
		"fallback": "iconaut:spline-solid",
	});
}

export default Component;
