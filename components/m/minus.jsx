import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhy83-btp.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhy83-btp"/>`,
		"fallback": "whh:minus",
	});
}

export default Component;
