import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ris3ovb4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ris3ovb4b"/>`,
		"fallback": "ooui:special-character",
	});
}

export default Component;
