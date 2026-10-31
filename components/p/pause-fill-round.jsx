import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-zd_5xuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-zd_5xuy"/>`,
		"fallback": "coolicons:pause-fill-round",
	});
}

export default Component;
