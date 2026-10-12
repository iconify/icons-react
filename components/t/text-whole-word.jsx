import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xj5eu-bha.css';
import '../../css/f/fvgbo_rpb.css';
import '../../css/w/wi-_nk02z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xj5eu-bha"/><path class="fvgbo_rpb"/><path class="wi-_nk02z"/></g>`,
		"fallback": "andrsrxn:text-whole-word",
	});
}

export default Component;
