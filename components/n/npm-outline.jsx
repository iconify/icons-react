import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk0r7efoy.css';
import '../../css/e/e1p3xu3iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk0r7efoy"/><path class="e1p3xu3iv"/>`,
		"fallback": "eva:npm-outline",
	});
}

export default Component;
