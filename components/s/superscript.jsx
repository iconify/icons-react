import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaxfi8b_p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaxfi8b_p"/>`,
		"fallback": "fa7-solid:superscript",
	});
}

export default Component;
