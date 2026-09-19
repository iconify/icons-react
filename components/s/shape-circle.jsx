import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yti4xpxoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yti4xpxoi"/>`,
		"fallback": "gg:shape-circle",
	});
}

export default Component;
