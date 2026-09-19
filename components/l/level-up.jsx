import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88-x3byc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88-x3byc"/>`,
		"fallback": "cil:level-up",
	});
}

export default Component;
