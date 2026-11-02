import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4jx25u4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4jx25u4f"/>`,
		"fallback": "mingcute:rewind-backward-square-10-fill",
	});
}

export default Component;
