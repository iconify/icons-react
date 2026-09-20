import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-8b8vb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-8b8vb7z"/>`,
		"fallback": "mingcute:power-line",
	});
}

export default Component;
