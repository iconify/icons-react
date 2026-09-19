import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfjdh9bcc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfjdh9bcc"/>`,
		"fallback": "whh:tragedy",
	});
}

export default Component;
