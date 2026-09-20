import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1dq8obpb.css';
import '../../css/b/b496zp8dc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1dq8obpb"/><path class="b496zp8dc"/></g>`,
		"fallback": "rivet-icons:user-group-solid",
	});
}

export default Component;
