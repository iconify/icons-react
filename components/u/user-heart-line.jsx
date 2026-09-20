import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-0xthen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-0xthen"/>`,
		"fallback": "mingcute:user-heart-line",
	});
}

export default Component;
