import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw_7_gbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw_7_gbeb"/>`,
		"fallback": "mdi:terraform",
	});
}

export default Component;
