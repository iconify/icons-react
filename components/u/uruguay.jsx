import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/r/ru_s8-b7j.css';
import '../../css/e/ex6us3x3w.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="ru_s8-b7j"/><path class="ex6us3x3w"/>`,
		"fallback": "tabler-flags:uruguay",
	});
}

export default Component;
