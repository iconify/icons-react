import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_u3a2y6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_u3a2y6v"/>`,
		"fallback": "streamline:interface-layout-border-bottom-border-bottom-cell-format-formatting",
	});
}

export default Component;
