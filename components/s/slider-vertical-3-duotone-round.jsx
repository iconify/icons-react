import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4djyqd2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4djyqd2q"/>`,
		"fallback": "coolicons:slider-vertical-3-duotone-round",
	});
}

export default Component;
