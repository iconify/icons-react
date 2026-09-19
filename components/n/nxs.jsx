import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lfh52hb7j.css';
import '../../css/u/u84e_0bhn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="lfh52hb7j"/><path class="u84e_0bhn"/></g>`,
		"fallback": "cryptocurrency-color:nxs",
	});
}

export default Component;
