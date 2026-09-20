import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thll_7t1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thll_7t1t"/>`,
		"fallback": "keyline-icons:message-minus-sharp-fill",
	});
}

export default Component;
