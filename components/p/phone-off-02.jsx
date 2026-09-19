import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jv4f43dxk.css';
import '../../css/j/jyhrcdcqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jv4f43dxk"/><path class="jyhrcdcqu"/></g>`,
		"fallback": "hugeicons:phone-off-02",
	});
}

export default Component;
