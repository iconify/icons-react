import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dowh2zbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dowh2zbfu"/>`,
		"fallback": "mdi:numeric-10-box-multiple",
	});
}

export default Component;
