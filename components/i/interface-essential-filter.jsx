import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6dumf67y.css';
import '../../css/f/fvfljrbsz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6dumf67y"/><path class="fvfljrbsz"/>`,
		"fallback": "streamline-pixel:interface-essential-filter",
	});
}

export default Component;
