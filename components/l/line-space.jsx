import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkj1c9jdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkj1c9jdu"/>`,
		"fallback": "iconoir:line-space",
	});
}

export default Component;
