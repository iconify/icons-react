import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ops0tgbrx.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ops0tgbrx"/><circle class="dcgw77bis"/></g>`,
		"fallback": "hugeicons:limitation",
	});
}

export default Component;
