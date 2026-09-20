import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pimuhx55s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pimuhx55s"/>`,
		"fallback": "mdi:paperclip-subtract",
	});
}

export default Component;
