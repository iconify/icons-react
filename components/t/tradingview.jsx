import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv2hi7bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv2hi7bej"/>`,
		"fallback": "thesvg:tradingview",
	});
}

export default Component;
