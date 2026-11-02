import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euwemx4vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euwemx4vf"/>`,
		"fallback": "mingcute:key-1-fill",
	});
}

export default Component;
