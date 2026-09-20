import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnwwpqb8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnwwpqb8k"/>`,
		"fallback": "streamline:interface-layout-border-left-border-cell-format-formatting-left",
	});
}

export default Component;
