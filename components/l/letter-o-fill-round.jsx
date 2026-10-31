import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh7b0fb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh7b0fb0z"/>`,
		"fallback": "coolicons:letter-o-fill-round",
	});
}

export default Component;
