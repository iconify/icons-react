import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgq0dgb1k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgq0dgb1k"/>`,
		"fallback": "streamline:interface-text-formatting-strike-through-text-strike-through-formatting-format",
	});
}

export default Component;
