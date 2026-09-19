import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-y8v8h3z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-y8v8h3z"/>`,
		"fallback": "ep:loading",
	});
}

export default Component;
