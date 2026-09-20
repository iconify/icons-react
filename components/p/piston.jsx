import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmrb8ackn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmrb8ackn"/>`,
		"fallback": "picon:piston",
	});
}

export default Component;
