import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh9r02b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh9r02b-k"/>`,
		"fallback": "mdi:rollerblade-off",
	});
}

export default Component;
