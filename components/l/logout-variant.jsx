import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_yi0s_0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_yi0s_0w"/>`,
		"fallback": "mdi:logout-variant",
	});
}

export default Component;
