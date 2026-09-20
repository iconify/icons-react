import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_4s_ccvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_4s_ccvi"/>`,
		"fallback": "mdi:mouse-move-vertical",
	});
}

export default Component;
