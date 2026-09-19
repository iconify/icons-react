import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl69qz8ca.css';
import '../../css/b/b5aw_lbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl69qz8ca"/><rect class="b5aw_lbmz"/>`,
		"fallback": "boxicons:margin-left-filled",
	});
}

export default Component;
