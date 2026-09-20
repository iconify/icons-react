import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hor504bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hor504bmg"/>`,
		"fallback": "mdi:report-bell-curve-cumulative",
	});
}

export default Component;
