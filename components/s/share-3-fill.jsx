import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weq3sf4aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weq3sf4aj"/>`,
		"fallback": "mingcute:share-3-fill",
	});
}

export default Component;
