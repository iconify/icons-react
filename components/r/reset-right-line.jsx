import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynf38iw_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynf38iw_d"/>`,
		"fallback": "ri:reset-right-line",
	});
}

export default Component;
