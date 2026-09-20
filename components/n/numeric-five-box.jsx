import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgodc5u1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgodc5u1a"/>`,
		"fallback": "mdi:numeric-five-box",
	});
}

export default Component;
