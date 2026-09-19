import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwop8ib1q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwop8ib1q"/>`,
		"fallback": "f7:tray-full-fill",
	});
}

export default Component;
