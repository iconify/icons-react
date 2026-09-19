import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf8q4cbqn.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf8q4cbqn"/>`,
		"fallback": "ls:trouble",
	});
}

export default Component;
