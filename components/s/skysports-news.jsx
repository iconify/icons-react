import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rci8lkegk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rci8lkegk"/>`,
		"fallback": "cbi:skysports-news",
	});
}

export default Component;
