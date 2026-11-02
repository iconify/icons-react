import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyh90f7mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyh90f7mz"/>`,
		"fallback": "mingcute:music-2-line",
	});
}

export default Component;
