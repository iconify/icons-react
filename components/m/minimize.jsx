import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaz65-dmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaz65-dmq"/>`,
		"fallback": "mynaui:minimize",
	});
}

export default Component;
