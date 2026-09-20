import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhk07pbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhk07pbay"/>`,
		"fallback": "reicon:search-status-filled",
	});
}

export default Component;
