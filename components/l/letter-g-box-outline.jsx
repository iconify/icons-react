import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st3e-o8vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st3e-o8vj"/>`,
		"fallback": "mdi:letter-g-box-outline",
	});
}

export default Component;
