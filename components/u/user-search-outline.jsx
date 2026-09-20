import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9u8w_40w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9u8w_40w"/>`,
		"fallback": "mdi:user-search-outline",
	});
}

export default Component;
