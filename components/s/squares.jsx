import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfndc6b4k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfndc6b4k"/>`,
		"fallback": "whh:squares",
	});
}

export default Component;
