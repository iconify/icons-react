import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjyjkeb1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yjyjkeb1p"/><line x1="2" x2="14" y1="8" y2="8"/><line x1="8" x2="8" y1="8" y2="12.75"/></g>`,
		"fallback": "charm:layout-stack-h",
	});
}

export default Component;
