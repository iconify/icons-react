import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqyj3bfjq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqyj3bfjq"/>`,
		"fallback": "garden:phone-stroke-20",
	});
}

export default Component;
