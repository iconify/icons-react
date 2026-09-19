import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f_s63lbuz.css';
import '../../css/w/wy5efpbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f_s63lbuz"/><path class="wy5efpbad"/></g>`,
		"fallback": "iconoir:open-select-hand-gesture",
	});
}

export default Component;
