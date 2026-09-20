import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2gg18hzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2gg18hzq"/>`,
		"fallback": "lineicons:trees-3",
	});
}

export default Component;
