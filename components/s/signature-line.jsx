import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp_6uxb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp_6uxb5r"/>`,
		"fallback": "mingcute:signature-line",
	});
}

export default Component;
