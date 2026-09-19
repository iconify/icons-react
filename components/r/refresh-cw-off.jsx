import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5tzr6vzu.css';
import '../../css/f/f5xovobko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g5tzr6vzu"/><path class="f5xovobko"/></g>`,
		"fallback": "hugeicons:refresh-cw-off",
	});
}

export default Component;
