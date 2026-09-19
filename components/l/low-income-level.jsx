import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xw0wsrbsy.css';
import '../../css/i/idelslp3k.css';
import '../../css/h/hj0drobtd.css';
import '../../css/j/jl4-3qb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xw0wsrbsy"/><path class="idelslp3k"/><path class="hj0drobtd"/><path clip-rule="evenodd" class="jl4-3qb9x"/></g>`,
		"fallback": "healthicons:low-income-level",
	});
}

export default Component;
