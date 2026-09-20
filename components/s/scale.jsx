import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msxw39e1d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msxw39e1d"/>`,
		"fallback": "openmoji:scale",
	});
}

export default Component;
