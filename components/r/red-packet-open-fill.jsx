import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqlmnacme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqlmnacme"/>`,
		"fallback": "mingcute:red-packet-open-fill",
	});
}

export default Component;
