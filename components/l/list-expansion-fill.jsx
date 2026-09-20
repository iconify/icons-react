import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnss54tzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnss54tzv"/>`,
		"fallback": "mingcute:list-expansion-fill",
	});
}

export default Component;
