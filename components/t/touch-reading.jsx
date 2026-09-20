import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgi_vyerr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgi_vyerr"/>`,
		"fallback": "mdi:touch-reading",
	});
}

export default Component;
