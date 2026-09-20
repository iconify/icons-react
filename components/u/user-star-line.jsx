import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe-f12b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe-f12b2d"/>`,
		"fallback": "mingcute:user-star-line",
	});
}

export default Component;
