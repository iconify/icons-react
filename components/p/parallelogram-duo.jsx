import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7xjmibsi.css';
import '../../css/e/e2rku5b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7xjmibsi secondary"/><path class="e2rku5b-i primary"/>`,
		"fallback": "iconaut:parallelogram-duo",
	});
}

export default Component;
