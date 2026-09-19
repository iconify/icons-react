import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ardbekbnv.css';
import '../../css/x/x7in55byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ardbekbnv"/><path class="x7in55byl"/>`,
		"fallback": "circum:memo-pad",
	});
}

export default Component;
