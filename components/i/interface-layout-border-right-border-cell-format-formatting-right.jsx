import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdvrtfb_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdvrtfb_z"/>`,
		"fallback": "streamline:interface-layout-border-right-border-cell-format-formatting-right",
	});
}

export default Component;
