import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax1xvlb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax1xvlb4s"/>`,
		"fallback": "iconaut:play-solid",
	});
}

export default Component;
