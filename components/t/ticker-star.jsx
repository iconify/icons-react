import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la6-9sbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="la6-9sbyx"/>`,
		"fallback": "reicon:ticker-star",
	});
}

export default Component;
