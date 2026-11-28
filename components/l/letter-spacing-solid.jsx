import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd4144bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd4144bzp"/>`,
		"fallback": "iconaut:letter-spacing-solid",
	});
}

export default Component;
