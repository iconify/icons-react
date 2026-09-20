import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teped2blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teped2blx"/>`,
		"fallback": "weui:like-outlined",
	});
}

export default Component;
