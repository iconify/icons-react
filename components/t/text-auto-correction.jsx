import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma_aklbun.css';
import '../../css/j/jj4xmjt4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ma_aklbun"/><path class="jj4xmjt4b"/></g>`,
		"fallback": "andrsrxn:text-auto-correction",
	});
}

export default Component;
