import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpifswb1p.css';
import '../../css/c/cuadd06uu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpifswb1p"/><path class="cuadd06uu"/>`,
		"fallback": "garden:text-color-fill-12",
	});
}

export default Component;
