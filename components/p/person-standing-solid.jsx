import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpuo92byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpuo92byx"/>`,
		"fallback": "iconaut:person-standing-solid",
	});
}

export default Component;
