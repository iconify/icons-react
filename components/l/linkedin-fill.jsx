import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxknr-n4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxknr-n4c"/>`,
		"fallback": "mingcute:linkedin-fill",
	});
}

export default Component;
