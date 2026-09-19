import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obq9c64fy.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obq9c64fy"/>`,
		"fallback": "el:mic-alt",
	});
}

export default Component;
