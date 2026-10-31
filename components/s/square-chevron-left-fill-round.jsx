import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goj2twb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goj2twb-u"/>`,
		"fallback": "coolicons:square-chevron-left-fill-round",
	});
}

export default Component;
