import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik25i8w8f.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik25i8w8f"/>`,
		"fallback": "whh:pigpenh",
	});
}

export default Component;
