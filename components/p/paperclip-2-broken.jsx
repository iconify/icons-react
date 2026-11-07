import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srf3omgjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srf3omgjr"/>`,
		"fallback": "solar:paperclip-2-broken",
	});
}

export default Component;
