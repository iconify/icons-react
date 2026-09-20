import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmd1qmb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmd1qmb9b"/>`,
		"fallback": "ri:landscape-line",
	});
}

export default Component;
