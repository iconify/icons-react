import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jeoamabzd.css';
import '../../css/x/x0eup3p_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jeoamabzd"/><path class="x0eup3p_i"/></g>`,
		"fallback": "hugeicons:search-circle",
	});
}

export default Component;
