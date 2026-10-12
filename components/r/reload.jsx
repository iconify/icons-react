import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s7k-s_blk.css';
import '../../css/r/r7i6vh0nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s7k-s_blk"/><path class="r7i6vh0nk"/></g>`,
		"fallback": "andrsrxn:reload",
	});
}

export default Component;
