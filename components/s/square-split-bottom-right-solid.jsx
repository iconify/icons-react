import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9_w5wtle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9_w5wtle"/>`,
		"fallback": "iconaut:square-split-bottom-right-solid",
	});
}

export default Component;
