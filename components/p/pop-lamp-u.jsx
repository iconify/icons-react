import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8t0c9btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8t0c9btd"/>`,
		"fallback": "cbi:pop-lamp-u",
	});
}

export default Component;
