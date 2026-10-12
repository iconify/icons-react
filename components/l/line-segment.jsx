import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5g-qd7ax.css';
import '../../css/j/jmchjfbxo.css';
import '../../css/v/vvyhyxb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g5g-qd7ax"/><path class="jmchjfbxo"/><path class="vvyhyxb9q"/></g>`,
		"fallback": "andrsrxn:line-segment",
	});
}

export default Component;
