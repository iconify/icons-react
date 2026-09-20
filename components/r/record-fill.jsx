import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl8cagq5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl8cagq5o"/>`,
		"fallback": "keyline-icons:record-fill",
	});
}

export default Component;
