import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgvk4cccp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgvk4cccp"/>`,
		"fallback": "coolicons:octagon-warning-fill-round",
	});
}

export default Component;
