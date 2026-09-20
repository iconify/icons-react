import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmf1tu78z.css';
import '../../css/p/pc6urubdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmf1tu78z"/><path class="pc6urubdx"/>`,
		"fallback": "mingcute:settings-5-line",
	});
}

export default Component;
