import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybcyq2b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybcyq2b6m"/>`,
		"fallback": "iconaut:lightbulb-solid",
	});
}

export default Component;
