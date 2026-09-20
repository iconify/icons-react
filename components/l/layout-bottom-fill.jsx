import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btp-w9hcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btp-w9hcb"/>`,
		"fallback": "mingcute:layout-bottom-fill",
	});
}

export default Component;
