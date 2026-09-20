import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9e-2gbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9e-2gbuf"/>`,
		"fallback": "solar:magic-stick-2-bold",
	});
}

export default Component;
