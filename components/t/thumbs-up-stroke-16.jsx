import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m5gr2acru.css';
import '../../css/l/lef_8ib5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m5gr2acru"/><rect class="lef_8ib5h"/></g>`,
		"fallback": "garden:thumbs-up-stroke-16",
	});
}

export default Component;
