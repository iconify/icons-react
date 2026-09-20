import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mtezw7m5k.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mtezw7m5k"/><path class="vlzselbkt"/></g>`,
		"fallback": "mynaui:search-check",
	});
}

export default Component;
