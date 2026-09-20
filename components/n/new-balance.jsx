import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wib0hymia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wib0hymia"/>`,
		"fallback": "thesvg:new-balance",
	});
}

export default Component;
