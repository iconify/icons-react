import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_-k83bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_-k83bxt"/>`,
		"fallback": "solar:map-arrow-right-linear",
	});
}

export default Component;
