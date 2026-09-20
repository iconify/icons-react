import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsvb0obgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsvb0obgj"/>`,
		"fallback": "nimbus:star",
	});
}

export default Component;
