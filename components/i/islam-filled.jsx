import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/expxopj_x.css';
import '../../css/p/pf8dc_bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="expxopj_x"/><path class="pf8dc_bap"/>`,
		"fallback": "boxicons:islam-filled",
	});
}

export default Component;
