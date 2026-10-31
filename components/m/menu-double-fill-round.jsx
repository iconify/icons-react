import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7pgc_e7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7pgc_e7m"/>`,
		"fallback": "coolicons:menu-double-fill-round",
	});
}

export default Component;
