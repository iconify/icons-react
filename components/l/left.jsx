import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyc-mbcsb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyc-mbcsb"/>`,
		"fallback": "picon:left",
	});
}

export default Component;
