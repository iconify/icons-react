import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlzselbkt.css';
import '../../css/w/w_86skbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vlzselbkt"/><path class="w_86skbsi"/></g>`,
		"fallback": "mynaui:search-dot",
	});
}

export default Component;
