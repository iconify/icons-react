import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihz5hb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihz5hb2k"/>`,
		"fallback": "ri:markdown-fill",
	});
}

export default Component;
