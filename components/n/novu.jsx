import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxen2xbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxen2xbvg"/>`,
		"fallback": "thesvg-color:novu",
	});
}

export default Component;
