import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_nh06b7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_nh06b7d"/>`,
		"fallback": "carbon:paint-brush",
	});
}

export default Component;
