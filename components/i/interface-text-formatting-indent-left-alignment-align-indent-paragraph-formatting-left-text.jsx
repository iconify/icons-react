import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i25nmhjnf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i25nmhjnf"/>`,
		"fallback": "streamline:interface-text-formatting-indent-left-alignment-align-indent-paragraph-formatting-left-text",
	});
}

export default Component;
