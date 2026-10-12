import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dj9bctb0u.css';
import '../../css/y/ya0_b8bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dj9bctb0u"/><path class="ya0_b8bjn"/></g>`,
		"fallback": "andrsrxn:trend-up-down",
	});
}

export default Component;
