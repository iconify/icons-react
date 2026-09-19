import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ja_s0el.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7ja_s0el"/>`,
		"fallback": "fa7-solid:sort-amount-asc",
	});
}

export default Component;
