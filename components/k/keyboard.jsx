import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlgkpox4q.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlgkpox4q"/>`,
		"fallback": "whh:keyboard",
	});
}

export default Component;
