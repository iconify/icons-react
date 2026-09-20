import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj4y8ib7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj4y8ib7t"/>`,
		"fallback": "keyline-icons:message-x",
	});
}

export default Component;
