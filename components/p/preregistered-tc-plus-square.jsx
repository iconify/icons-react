import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr85fxbsu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr85fxbsu"/>`,
		"fallback": "academicons:preregistered-tc-plus-square",
	});
}

export default Component;
