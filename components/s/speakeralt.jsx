import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h65q5vbpz.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h65q5vbpz"/>`,
		"fallback": "whh:speakeralt",
	});
}

export default Component;
