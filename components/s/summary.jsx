import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xw0eb-lzn.css';
import '../../css/v/v1tzuzb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xw0eb-lzn"/><path class="v1tzuzb2j"/></g>`,
		"fallback": "andrsrxn:summary",
	});
}

export default Component;
