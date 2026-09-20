import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csb45tgkg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csb45tgkg"/>`,
		"fallback": "la:sort-amount-down-alt-solid",
	});
}

export default Component;
