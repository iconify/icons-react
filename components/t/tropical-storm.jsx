import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/soj399b8i.css';
import '../../css/w/wyyl88b5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="soj399b8i"/><path class="wyyl88b5v"/></g>`,
		"fallback": "bi:tropical-storm",
	});
}

export default Component;
