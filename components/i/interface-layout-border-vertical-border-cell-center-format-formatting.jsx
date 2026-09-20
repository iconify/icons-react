import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcuyxab0t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcuyxab0t"/>`,
		"fallback": "streamline:interface-layout-border-vertical-border-cell-center-format-formatting",
	});
}

export default Component;
