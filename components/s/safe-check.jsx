import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4wzd5s2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4wzd5s2l"/>`,
		"fallback": "noviair-light:safe-check",
	});
}

export default Component;
