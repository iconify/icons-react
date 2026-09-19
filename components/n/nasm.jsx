import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhwlfy75m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhwlfy75m"/>`,
		"fallback": "devicon-plain:nasm",
	});
}

export default Component;
