import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g05i0xqhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g05i0xqhy"/>`,
		"fallback": "mingcute:subtitle-fill",
	});
}

export default Component;
