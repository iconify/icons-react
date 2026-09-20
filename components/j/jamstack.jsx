import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0x7am-wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0x7am-wj"/>`,
		"fallback": "thesvg-color:jamstack",
	});
}

export default Component;
