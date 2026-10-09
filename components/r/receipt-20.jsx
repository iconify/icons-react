import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pepcxkbtl.css';
import '../../css/m/mvmh7mwai.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pepcxkbtl"/><path class="mvmh7mwai"/>`,
		"fallback": "energy-icons:receipt-20",
	});
}

export default Component;
