import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wg1kjubwb.css';
import '../../css/j/jqev7cyil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wg1kjubwb"/><path class="jqev7cyil"/></g>`,
		"fallback": "reicon:undo3",
	});
}

export default Component;
