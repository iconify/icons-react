import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0cbo8bvk.css';
import '../../css/f/fd4fpfb_f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0cbo8bvk"/><path class="fd4fpfb_f"/>`,
		"fallback": "foundation:page-pdf",
	});
}

export default Component;
