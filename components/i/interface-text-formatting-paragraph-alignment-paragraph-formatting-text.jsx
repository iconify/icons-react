import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt55xubhx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt55xubhx"/>`,
		"fallback": "streamline:interface-text-formatting-paragraph-alignment-paragraph-formatting-text",
	});
}

export default Component;
