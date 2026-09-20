import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzqcv6b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzqcv6b8g"/>`,
		"fallback": "mingcute:store-2-line",
	});
}

export default Component;
