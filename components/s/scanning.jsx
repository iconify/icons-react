import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ema3nk49z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ema3nk49z"/>`,
		"fallback": "reicon:scanning",
	});
}

export default Component;
