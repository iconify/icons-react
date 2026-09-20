import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1pb57q2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1pb57q2j"/>`,
		"fallback": "keyline-icons:smartphone-plus",
	});
}

export default Component;
