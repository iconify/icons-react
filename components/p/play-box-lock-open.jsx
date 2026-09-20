import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c22yatb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c22yatb4n"/>`,
		"fallback": "mdi:play-box-lock-open",
	});
}

export default Component;
