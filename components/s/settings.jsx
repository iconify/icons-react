import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajd76obsv.css';
import '../../css/y/yzerifeef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajd76obsv"/><path class="yzerifeef"/>`,
		"fallback": "circum:settings",
	});
}

export default Component;
