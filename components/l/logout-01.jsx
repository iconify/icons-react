import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_tn_bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az_tn_bpu"/>`,
		"fallback": "hugeicons:logout-01",
	});
}

export default Component;
