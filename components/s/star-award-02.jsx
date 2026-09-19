import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aj9cdbcjg.css';
import '../../css/c/cl90hcccv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aj9cdbcjg"/><path class="cl90hcccv"/></g>`,
		"fallback": "hugeicons:star-award-02",
	});
}

export default Component;
