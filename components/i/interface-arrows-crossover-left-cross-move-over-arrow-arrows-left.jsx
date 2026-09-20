import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_x7z-5qi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_x7z-5qi"/>`,
		"fallback": "streamline:interface-arrows-crossover-left-cross-move-over-arrow-arrows-left",
	});
}

export default Component;
