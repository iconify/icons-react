import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yno2t3b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yno2t3b3s"/>`,
		"fallback": "simple-icons:minetest",
	});
}

export default Component;
