import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpsu0p27p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpsu0p27p"/>`,
		"fallback": "mdi:link-box-outline",
	});
}

export default Component;
