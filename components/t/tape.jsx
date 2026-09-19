import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79pb6bou.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z79pb6bou"/>`,
		"fallback": "fa7-solid:tape",
	});
}

export default Component;
