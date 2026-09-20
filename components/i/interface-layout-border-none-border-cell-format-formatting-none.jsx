import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9y5u9bmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9y5u9bmj"/>`,
		"fallback": "streamline:interface-layout-border-none-border-cell-format-formatting-none",
	});
}

export default Component;
