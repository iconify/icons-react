import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlst_c_vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlst_c_vd"/>`,
		"fallback": "mingcute:map-pin-line",
	});
}

export default Component;
