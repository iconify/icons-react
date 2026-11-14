import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk3w14b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk3w14b0t"/>`,
		"fallback": "hugeicons:message-cancel-01",
	});
}

export default Component;
