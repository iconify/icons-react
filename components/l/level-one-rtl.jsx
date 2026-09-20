import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r263ow21w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r263ow21w"/>`,
		"fallback": "ooui:level-one-rtl",
	});
}

export default Component;
