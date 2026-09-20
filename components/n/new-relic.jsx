import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz2y4bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfz2y4bgx"/>`,
		"fallback": "thesvg-color:new-relic",
	});
}

export default Component;
