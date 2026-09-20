import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbuir7ayr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbuir7ayr"/>`,
		"fallback": "streamline:interface-text-formatting-font-size-size-text-formatting-font-format",
	});
}

export default Component;
