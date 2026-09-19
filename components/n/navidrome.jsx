import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/welyr_3mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="welyr_3mp"/>`,
		"fallback": "cbi:navidrome",
	});
}

export default Component;
