import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/myw3pgbgg.css';
import '../../css/q/qcwgi8tmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="myw3pgbgg"/><path class="qcwgi8tmy"/></g>`,
		"fallback": "bi:wallet-fill",
	});
}

export default Component;
