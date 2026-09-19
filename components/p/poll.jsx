import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahr1-k04q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahr1-k04q"/>`,
		"fallback": "bx:poll",
	});
}

export default Component;
