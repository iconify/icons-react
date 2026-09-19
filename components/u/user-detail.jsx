import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfwo3xbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfwo3xbhn"/>`,
		"fallback": "bxs:user-detail",
	});
}

export default Component;
