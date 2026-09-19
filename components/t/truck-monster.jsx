import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5yls2b_j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5yls2b_j"/>`,
		"fallback": "fa7-solid:truck-monster",
	});
}

export default Component;
