import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqte5-ewe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqte5-ewe"/>`,
		"fallback": "mdi:kodi",
	});
}

export default Component;
