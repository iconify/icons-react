import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isp18v05x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isp18v05x"/>`,
		"fallback": "mdi:trolley-arrow-down",
	});
}

export default Component;
