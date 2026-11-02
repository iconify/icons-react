import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbodtbm7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbodtbm7r"/>`,
		"fallback": "mingcute:refresh-1-line",
	});
}

export default Component;
