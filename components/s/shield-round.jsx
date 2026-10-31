import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whr5k5f0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whr5k5f0z"/>`,
		"fallback": "coolicons:shield-round",
	});
}

export default Component;
