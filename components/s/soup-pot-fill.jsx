import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tij5voh0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tij5voh0d"/>`,
		"fallback": "mingcute:soup-pot-fill",
	});
}

export default Component;
