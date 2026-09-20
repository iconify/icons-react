import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jew7w5bpm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jew7w5bpm"/>`,
		"fallback": "pinhead:motorboat-and-baht",
	});
}

export default Component;
