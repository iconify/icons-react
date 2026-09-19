import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmqkr95yr.css';
import '../../css/c/cxgt2g6hf.css';
import '../../css/t/tiz7iu3-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmqkr95yr"/><path class="cxgt2g6hf"/><path class="tiz7iu3-y"/></g>`,
		"fallback": "hugeicons:tree-07",
	});
}

export default Component;
