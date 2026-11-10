import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gs03f-min.css';
import '../../css/u/uavw2yb6h.css';
import '../../css/e/ezg7ktv-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gs03f-min"/><path class="uavw2yb6h"/><path class="ezg7ktv-a"/></g>`,
		"fallback": "andrsrxn:text-whole-word",
	});
}

export default Component;
