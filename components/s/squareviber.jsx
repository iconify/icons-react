import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4a4kabvp.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4a4kabvp"/>`,
		"fallback": "whh:squareviber",
	});
}

export default Component;
