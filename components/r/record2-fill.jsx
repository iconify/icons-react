import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/js8uj5b5b.css';
import '../../css/e/efx57ib5y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="js8uj5b5b"/><path class="efx57ib5y"/></g>`,
		"fallback": "bi:record2-fill",
	});
}

export default Component;
