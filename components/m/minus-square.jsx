import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxk-8juiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxk-8juiw"/>`,
		"fallback": "noviair-light:minus-square",
	});
}

export default Component;
