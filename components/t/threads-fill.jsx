import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byb4wkvpc.css';
import '../../css/r/rgb87xbdb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byb4wkvpc"/><path class="rgb87xbdb"/></g>`,
		"fallback": "bi:threads-fill",
	});
}

export default Component;
