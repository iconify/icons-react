import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u40vykccn.css';
import '../../css/q/qtlvb393x.css';
import '../../css/v/v07nc-b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u40vykccn"/><path class="qtlvb393x"/><path class="v07nc-b0h"/></g>`,
		"fallback": "iconoir:treadmill",
	});
}

export default Component;
