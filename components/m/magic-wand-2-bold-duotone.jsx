import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxk_x0b5m.css';
import '../../css/o/o1oqmebja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxk_x0b5m"/><path class="o1oqmebja"/>`,
		"fallback": "solar:magic-wand-2-bold-duotone",
	});
}

export default Component;
