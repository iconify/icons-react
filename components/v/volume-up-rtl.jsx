import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8f6_-atn.css';
import '../../css/b/b_7qycc3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8f6_-atn"/><path class="b_7qycc3l"/>`,
		"fallback": "ooui:volume-up-rtl",
	});
}

export default Component;
