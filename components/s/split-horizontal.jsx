import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2_u02b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2_u02b4i"/>`,
		"fallback": "mdi:split-horizontal",
	});
}

export default Component;
