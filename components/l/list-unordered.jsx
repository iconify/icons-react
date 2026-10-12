import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn6ox60hn.css';
import '../../css/z/z4phq-b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rn6ox60hn"/><path class="z4phq-b2x"/></g>`,
		"fallback": "andrsrxn:list-unordered",
	});
}

export default Component;
