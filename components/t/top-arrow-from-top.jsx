import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb_xysb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb_xysb9d"/>`,
		"fallback": "uil:top-arrow-from-top",
	});
}

export default Component;
