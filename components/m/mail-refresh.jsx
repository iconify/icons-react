import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frov4f2kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frov4f2kr"/>`,
		"fallback": "noviair:mail-refresh",
	});
}

export default Component;
