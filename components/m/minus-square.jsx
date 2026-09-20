import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gewabquhd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gewabquhd"/>`,
		"fallback": "uiw:minus-square",
	});
}

export default Component;
