import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbt76bb0x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbt76bb0x"/>`,
		"fallback": "devicon-plain:php",
	});
}

export default Component;
