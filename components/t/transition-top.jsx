import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh65d-5az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh65d-5az"/>`,
		"fallback": "tabler:transition-top",
	});
}

export default Component;
