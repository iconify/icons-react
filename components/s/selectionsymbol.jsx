import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7qk6dbfo.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7qk6dbfo"/>`,
		"fallback": "whh:selectionsymbol",
	});
}

export default Component;
