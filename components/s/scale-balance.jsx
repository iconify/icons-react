import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p25xc3b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p25xc3b2g"/>`,
		"fallback": "mdi:scale-balance",
	});
}

export default Component;
