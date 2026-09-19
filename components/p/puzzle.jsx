import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq0gnne1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq0gnne1v"/>`,
		"fallback": "hugeicons:puzzle",
	});
}

export default Component;
