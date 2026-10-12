import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cq10oacbt.css';
import '../../css/k/kzmmr-3qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cq10oacbt"/><path class="kzmmr-3qy"/></g>`,
		"fallback": "andrsrxn:refresh-plus",
	});
}

export default Component;
