import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qde_akxdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qde_akxdf"/>`,
		"fallback": "hugeicons:swipe-left-01",
	});
}

export default Component;
