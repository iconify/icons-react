import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlnvhmbfb.css';
import '../../css/s/s_bvtezdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xlnvhmbfb"/><path class="primary s_bvtezdq"/></g>`,
		"fallback": "iconaut:star-half-duotone",
	});
}

export default Component;
