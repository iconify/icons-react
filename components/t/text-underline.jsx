import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnln94bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnln94bkm"/>`,
		"fallback": "reicon:text-underline",
	});
}

export default Component;
