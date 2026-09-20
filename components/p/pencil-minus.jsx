import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcwn_xbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcwn_xbav"/>`,
		"fallback": "mdi:pencil-minus",
	});
}

export default Component;
