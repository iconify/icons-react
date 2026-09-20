import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8_uoo2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8_uoo2s"/>`,
		"fallback": "mynaui:tree-pine",
	});
}

export default Component;
