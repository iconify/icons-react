import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijrakd5dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijrakd5dp"/>`,
		"fallback": "mingcute:tyre-line",
	});
}

export default Component;
