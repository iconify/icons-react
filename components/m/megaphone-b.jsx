import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybu_-acgm.css';
import '../../css/k/khzk-5dki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ybu_-acgm"/><path class="khzk-5dki"/></g>`,
		"fallback": "mage:megaphone-b",
	});
}

export default Component;
