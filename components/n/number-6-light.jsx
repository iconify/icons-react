import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgeizubcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgeizubcz"/>`,
		"fallback": "iconamoon:number-6-light",
	});
}

export default Component;
