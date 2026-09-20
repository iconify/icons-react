import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5l55k5vn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5l55k5vn"/>`,
		"fallback": "jam:superscript",
	});
}

export default Component;
