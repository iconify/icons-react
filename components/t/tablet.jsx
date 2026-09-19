import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq5-1l2ug.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq5-1l2ug"/>`,
		"fallback": "fa7-solid:tablet",
	});
}

export default Component;
