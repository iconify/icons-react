import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvay3xbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvay3xbvn"/>`,
		"fallback": "mdi:reply",
	});
}

export default Component;
