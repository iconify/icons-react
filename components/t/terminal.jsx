import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q15x4_bbt.css';
import '../../css/p/pc7e7mp-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="q15x4_bbt"/><path class="pc7e7mp-z"/></g>`,
		"fallback": "matita:terminal",
	});
}

export default Component;
