import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xo400fblh.css';
import '../../css/k/kt_7q50fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xo400fblh"/><path class="kt_7q50fu"/></g>`,
		"fallback": "reicon:radio4",
	});
}

export default Component;
