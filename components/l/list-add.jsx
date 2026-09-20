import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj991ib0w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj991ib0w"/>`,
		"fallback": "zondicons:list-add",
	});
}

export default Component;
