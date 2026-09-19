import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz6g2ynyk.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz6g2ynyk"/>`,
		"fallback": "fa-solid:volume-off",
	});
}

export default Component;
