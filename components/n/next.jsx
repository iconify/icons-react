import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxr4-wf7k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxr4-wf7k"/>`,
		"fallback": "whh:next",
	});
}

export default Component;
