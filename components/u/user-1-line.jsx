import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqod7_waq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqod7_waq"/>`,
		"fallback": "mingcute:user-1-line",
	});
}

export default Component;
