import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhi6ye7ap.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhi6ye7ap"/>`,
		"fallback": "whh:twofingerswipedown",
	});
}

export default Component;
