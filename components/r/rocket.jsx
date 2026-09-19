import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lucisccdd.css';
import '../../css/u/usk0x8bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lucisccdd"/><path class="usk0x8bip"/></g>`,
		"fallback": "iconoir:rocket",
	});
}

export default Component;
