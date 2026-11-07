import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hvfw3sb6l.css';
import '../../css/y/yt0hjpbef.css';
import '../../css/f/fhnye3b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hvfw3sb6l"/><path class="yt0hjpbef"/><path class="fhnye3b1t"/></g>`,
		"fallback": "solar:star-ring-line-duotone",
	});
}

export default Component;
