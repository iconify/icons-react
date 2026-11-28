import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj4_kbeau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj4_kbeau"/>`,
		"fallback": "noviair-light:smartphone-lock",
	});
}

export default Component;
