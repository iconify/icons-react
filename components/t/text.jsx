import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjkqr-26p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjkqr-26p"/>`,
		"fallback": "reicon:text",
	});
}

export default Component;
