import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt-nwc72o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt-nwc72o"/>`,
		"fallback": "mdi:square-root-box",
	});
}

export default Component;
