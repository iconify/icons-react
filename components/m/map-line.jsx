import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnpa_2wmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnpa_2wmr"/>`,
		"fallback": "mingcute:map-line",
	});
}

export default Component;
