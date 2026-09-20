import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7mr94yrz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7mr94yrz"/>`,
		"fallback": "pinhead:person-sleeping-in-bed-above-car",
	});
}

export default Component;
