import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opp5y0_jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opp5y0_jk"/>`,
		"fallback": "mdi:plex",
	});
}

export default Component;
