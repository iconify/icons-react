import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4s28r8sx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4s28r8sx"/>`,
		"fallback": "streamline-pixel:interface-essential-question-help-square",
	});
}

export default Component;
