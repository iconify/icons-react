import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yydt5mb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yydt5mb0j"/>`,
		"fallback": "boxicons:phone-book-filled",
	});
}

export default Component;
