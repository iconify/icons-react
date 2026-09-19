import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxjkv33_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxjkv33_s"/>`,
		"fallback": "heroicons:viewfinder-dot",
	});
}

export default Component;
