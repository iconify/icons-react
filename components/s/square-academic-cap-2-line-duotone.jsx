import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea7fh4hco.css';
import '../../css/c/cr2u8wl8s.css';
import '../../css/u/ur_44xbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea7fh4hco"/><path class="cr2u8wl8s"/><path class="ur_44xbhw"/></g>`,
		"fallback": "solar:square-academic-cap-2-line-duotone",
	});
}

export default Component;
