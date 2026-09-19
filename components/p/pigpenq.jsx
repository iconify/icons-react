import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrvog2q9k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrvog2q9k"/>`,
		"fallback": "whh:pigpenq",
	});
}

export default Component;
