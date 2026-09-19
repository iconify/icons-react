import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw7c98bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw7c98bqz"/>`,
		"fallback": "boxicons:pi",
	});
}

export default Component;
