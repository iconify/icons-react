import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmvj3g29q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmvj3g29q"/>`,
		"fallback": "weui:qr-code-outlined",
	});
}

export default Component;
