import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xb_7uoxfu.css';
import '../../css/j/jg_rotowk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xb_7uoxfu"/><path class="jg_rotowk"/></g>`,
		"fallback": "streamline-ultimate:notes-book",
	});
}

export default Component;
