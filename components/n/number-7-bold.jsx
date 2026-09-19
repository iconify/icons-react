import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_qs9ogj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_qs9ogj"/>`,
		"fallback": "iconamoon:number-7-bold",
	});
}

export default Component;
