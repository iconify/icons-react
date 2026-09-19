import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bazxsibde.css';
import '../../css/r/ri5_0i_ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bazxsibde"/><path class="ri5_0i_ew"/>`,
		"fallback": "boxicons:rotate-ccw-30",
	});
}

export default Component;
