import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzb_m2b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzb_m2b_z"/>`,
		"fallback": "coolicons:tv-fill-round",
	});
}

export default Component;
