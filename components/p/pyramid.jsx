import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq6lq7k0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq6lq7k0j"/>`,
		"fallback": "bxs:pyramid",
	});
}

export default Component;
