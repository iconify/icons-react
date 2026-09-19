import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ionisxb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ionisxb7s"/>`,
		"fallback": "gg:menu-hotdog",
	});
}

export default Component;
