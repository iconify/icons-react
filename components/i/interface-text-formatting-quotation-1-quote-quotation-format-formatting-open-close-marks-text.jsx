import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpq5tdlys.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpq5tdlys"/>`,
		"fallback": "streamline:interface-text-formatting-quotation-1-quote-quotation-format-formatting-open-close-marks-text",
	});
}

export default Component;
