import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ufjli0myu.css';
import '../../css/x/xb-rixbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ufjli0myu"/><path class="xb-rixbhw"/></g>`,
		"fallback": "andrsrxn:text-case-camel",
	});
}

export default Component;
