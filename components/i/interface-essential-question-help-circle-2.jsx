import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8xmm274s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8xmm274s"/>`,
		"fallback": "streamline-pixel:interface-essential-question-help-circle-2",
	});
}

export default Component;
