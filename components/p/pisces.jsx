import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_h__lbww.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_h__lbww"/>`,
		"fallback": "fa7-solid:pisces",
	});
}

export default Component;
