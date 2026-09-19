import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn1gikdgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn1gikdgn"/>`,
		"fallback": "boxicons:syringe-filled",
	});
}

export default Component;
