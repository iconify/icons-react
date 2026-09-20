import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh-axobrn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh-axobrn"/>`,
		"fallback": "streamline:interface-layout-border-top-border-cell-format-formatting-top",
	});
}

export default Component;
