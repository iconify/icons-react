import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k55i2mb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k55i2mb6z"/>`,
		"fallback": "ri:order-play-line",
	});
}

export default Component;
