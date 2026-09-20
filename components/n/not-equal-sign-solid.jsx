import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgpjj0r1l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgpjj0r1l"/>`,
		"fallback": "streamline:not-equal-sign-solid",
	});
}

export default Component;
