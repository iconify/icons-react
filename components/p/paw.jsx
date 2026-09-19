import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnsr65b_r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnsr65b_r"/>`,
		"fallback": "fa7-solid:paw",
	});
}

export default Component;
