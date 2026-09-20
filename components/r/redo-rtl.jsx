import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asv-dbblt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asv-dbblt"/>`,
		"fallback": "ooui:redo-rtl",
	});
}

export default Component;
