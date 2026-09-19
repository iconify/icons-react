import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki60rr_rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki60rr_rh"/>`,
		"fallback": "hugeicons:remove-02",
	});
}

export default Component;
