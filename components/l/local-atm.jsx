import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/totc_uaeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="totc_uaeo"/>`,
		"fallback": "mdi:local-atm",
	});
}

export default Component;
