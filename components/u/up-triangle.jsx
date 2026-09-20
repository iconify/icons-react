import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhw8w_bvv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhw8w_bvv"/>`,
		"fallback": "ooui:up-triangle",
	});
}

export default Component;
