import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqyamvt_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqyamvt_h"/>`,
		"fallback": "typcn:user-delete-outline",
	});
}

export default Component;
