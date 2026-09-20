import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugoglub7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugoglub7o"/>`,
		"fallback": "keyline-icons:message-square-lines-fill",
	});
}

export default Component;
