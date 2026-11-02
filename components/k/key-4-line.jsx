import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qki58hbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qki58hbvi"/>`,
		"fallback": "mingcute:key-4-line",
	});
}

export default Component;
