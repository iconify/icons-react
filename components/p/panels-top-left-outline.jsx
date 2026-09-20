import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acs2urb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acs2urb_h"/>`,
		"fallback": "solar:panels-top-left-outline",
	});
}

export default Component;
