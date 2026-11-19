import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v4e18wb_d.css';
import '../../css/y/yq7trvbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v4e18wb_d"/><path class="yq7trvbfw"/></g>`,
		"fallback": "andrsrxn:text-lowercase",
	});
}

export default Component;
