import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ej5yk81ft.css';
import '../../css/p/p3q3wurqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ej5yk81ft"/><path class="p3q3wurqs"/></g>`,
		"fallback": "cryptocurrency-color:pot",
	});
}

export default Component;
