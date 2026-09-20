import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuhumb8sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuhumb8sa"/>`,
		"fallback": "mdi:numeric-6-box-multiple",
	});
}

export default Component;
