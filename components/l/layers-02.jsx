import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nbb1ftj4o.css';
import '../../css/o/o9oyw409s.css';
import '../../css/t/tjnqk450w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="nbb1ftj4o"/><path class="o9oyw409s"/><path class="tjnqk450w"/></g>`,
		"fallback": "hugeicons:layers-02",
	});
}

export default Component;
