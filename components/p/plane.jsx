import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga5whqb4b.css';

const viewBox = {"width":718,"height":716};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga5whqb4b"/>`,
		"fallback": "ls:plane",
	});
}

export default Component;
