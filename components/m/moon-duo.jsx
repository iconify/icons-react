import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgzmasisn.css';
import '../../css/x/xycz9duzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sgzmasisn"/><path class="primary xycz9duzp"/>`,
		"fallback": "iconaut:moon-duo",
	});
}

export default Component;
