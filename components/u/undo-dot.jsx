import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh4vhcbeb.css';
import '../../css/b/b04akfbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yh4vhcbeb"/><path class="b04akfbjc"/></g>`,
		"fallback": "hugeicons:undo-dot",
	});
}

export default Component;
