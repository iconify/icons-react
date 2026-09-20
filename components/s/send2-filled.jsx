import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua4o1w2iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua4o1w2iz"/>`,
		"fallback": "reicon:send2-filled",
	});
}

export default Component;
