import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugyrrbclb.css';
import '../../css/i/is89d5tfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ugyrrbclb"/><path class="is89d5tfh"/></g>`,
		"fallback": "andrsrxn:list-reload",
	});
}

export default Component;
