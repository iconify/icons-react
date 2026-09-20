import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfq1gi_xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfq1gi_xs"/>`,
		"fallback": "mdi:phone-refresh",
	});
}

export default Component;
