import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-3jc2mnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-3jc2mnr"/>`,
		"fallback": "mdi:star-box-multiple-outline",
	});
}

export default Component;
