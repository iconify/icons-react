import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go9b1n-cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go9b1n-cs"/>`,
		"fallback": "ci:message-minus",
	});
}

export default Component;
