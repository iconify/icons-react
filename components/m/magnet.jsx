import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ius746b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ius746b1o"/>`,
		"fallback": "bxs:magnet",
	});
}

export default Component;
