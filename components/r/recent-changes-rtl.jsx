import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2yfbmbzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2yfbmbzr"/>`,
		"fallback": "ooui:recent-changes-rtl",
	});
}

export default Component;
