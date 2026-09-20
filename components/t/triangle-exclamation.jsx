import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msaxu7bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msaxu7bcc"/>`,
		"fallback": "meteor-icons:triangle-exclamation",
	});
}

export default Component;
