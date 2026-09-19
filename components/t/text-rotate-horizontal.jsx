import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc7mtvwgn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc7mtvwgn"/>`,
		"fallback": "fluent-mdl2:text-rotate-horizontal",
	});
}

export default Component;
