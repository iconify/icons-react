import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1t7cdk1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1t7cdk1d"/>`,
		"fallback": "solar:stars-2-outline",
	});
}

export default Component;
