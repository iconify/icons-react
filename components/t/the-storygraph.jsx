import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixd3b-p8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixd3b-p8c"/>`,
		"fallback": "thesvg:the-storygraph",
	});
}

export default Component;
