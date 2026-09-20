import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv99-xynx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv99-xynx"/>`,
		"fallback": "thesvg-color:revenuecat",
	});
}

export default Component;
