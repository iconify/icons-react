import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vmemh6b6j.css';
import '../../css/n/ne0kupbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="vmemh6b6j"/><path class="ne0kupbtr"/></g>`,
		"fallback": "streamline-logos:paypal-logo",
	});
}

export default Component;
