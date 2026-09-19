import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-_4ewbhd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-_4ewbhd"/>`,
		"fallback": "academicons:piazza-square",
	});
}

export default Component;
