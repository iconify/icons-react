import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agh5kobes.css';
import '../../css/f/fe-l95ejb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agh5kobes"/><path class="fe-l95ejb"/>`,
		"fallback": "boxicons:price-tag",
	});
}

export default Component;
