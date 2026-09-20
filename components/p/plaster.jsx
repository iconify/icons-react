import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz0m0tbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz0m0tbhy"/>`,
		"fallback": "mdi:plaster",
	});
}

export default Component;
