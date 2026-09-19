import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/t21xoxbdi.css';
import '../../css/s/s6el198ov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="t21xoxbdi"/><rect class="s6el198ov"/></g>`,
		"fallback": "garden:thumbs-down-stroke-16",
	});
}

export default Component;
