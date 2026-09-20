import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfedg_btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfedg_btm"/>`,
		"fallback": "mdi:upload-off-outline",
	});
}

export default Component;
