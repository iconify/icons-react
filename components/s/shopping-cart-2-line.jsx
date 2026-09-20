import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4l3vs4aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4l3vs4aw"/>`,
		"fallback": "ri:shopping-cart-2-line",
	});
}

export default Component;
