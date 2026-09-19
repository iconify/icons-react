import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc2hiecsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc2hiecsb"/>`,
		"fallback": "iconamoon:number-4-thin",
	});
}

export default Component;
