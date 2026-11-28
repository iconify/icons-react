import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obv-dzbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obv-dzbot"/>`,
		"fallback": "iconaut:stroke-line-join-bevel",
	});
}

export default Component;
