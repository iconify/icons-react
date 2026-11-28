import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bno-e-txj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bno-e-txj"/>`,
		"fallback": "noviair-light:smartphone-gear",
	});
}

export default Component;
