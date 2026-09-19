import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwn4yowi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnwn4yowi"/>`,
		"fallback": "griddy-icons:unity",
	});
}

export default Component;
