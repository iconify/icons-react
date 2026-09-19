import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbexcdcsc.css';
import '../../css/b/btxln4pbg.css';
import '../../css/p/p8qjm6bhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbexcdcsc"/><path class="btxln4pbg"/><path class="p8qjm6bhy"/>`,
		"fallback": "ion:ios-bulb",
	});
}

export default Component;
