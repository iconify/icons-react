import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjvb-7nsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjvb-7nsm"/>`,
		"fallback": "tdesign:location-1-filled",
	});
}

export default Component;
