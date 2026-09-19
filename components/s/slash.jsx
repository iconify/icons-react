import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjkq6u0-q.css';

const viewBox = {"width":383,"height":854};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjkq6u0-q"/>`,
		"fallback": "ls:slash",
	});
}

export default Component;
