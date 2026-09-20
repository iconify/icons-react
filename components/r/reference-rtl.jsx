import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha4ba9bgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha4ba9bgu"/>`,
		"fallback": "ooui:reference-rtl",
	});
}

export default Component;
