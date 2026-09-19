import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_6esb3p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_6esb3p"/>`,
		"fallback": "whh:loadingalt",
	});
}

export default Component;
