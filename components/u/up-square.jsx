import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9f7b2xcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9f7b2xcd"/>`,
		"fallback": "uiw:up-square",
	});
}

export default Component;
