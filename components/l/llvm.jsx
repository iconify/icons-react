import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4y3p3btl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4y3p3btl"/>`,
		"fallback": "devicon-plain:llvm",
	});
}

export default Component;
