import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls3x4fbrk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls3x4fbrk"/>`,
		"fallback": "pinhead:newspaper",
	});
}

export default Component;
