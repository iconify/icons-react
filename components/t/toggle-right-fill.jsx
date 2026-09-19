import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmur6okjy.css';
import '../../css/z/zjsfxxucc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nmur6okjy"/><path class="zjsfxxucc"/>`,
		"fallback": "eva:toggle-right-fill",
	});
}

export default Component;
