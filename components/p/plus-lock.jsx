import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkw2z3lzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkw2z3lzs"/>`,
		"fallback": "mdi:plus-lock",
	});
}

export default Component;
