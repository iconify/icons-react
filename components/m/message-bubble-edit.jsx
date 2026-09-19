import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqu1h4boa.css';
import '../../css/w/w5v5asbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqu1h4boa"/><path class="w5v5asbue"/>`,
		"fallback": "boxicons:message-bubble-edit",
	});
}

export default Component;
