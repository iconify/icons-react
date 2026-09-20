import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqa6cubrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqa6cubrw"/>`,
		"fallback": "thesvg-color:red-candle-games",
	});
}

export default Component;
