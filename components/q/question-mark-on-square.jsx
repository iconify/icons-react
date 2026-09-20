import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxrt52mwa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxrt52mwa"/>`,
		"fallback": "pinhead:question-mark-on-square",
	});
}

export default Component;
