import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxm4yjf1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxm4yjf1z"/>`,
		"fallback": "ri:paint-fill",
	});
}

export default Component;
