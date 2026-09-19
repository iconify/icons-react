import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/clcpbnkzo.css';
import '../../css/r/rozhgzbsb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="clcpbnkzo"/><rect class="rozhgzbsb"/></g>`,
		"fallback": "garden:thumbs-down-fill-16",
	});
}

export default Component;
