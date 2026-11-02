import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw6p4ccxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw6p4ccxa"/>`,
		"fallback": "mingcute:mail-send-fill",
	});
}

export default Component;
