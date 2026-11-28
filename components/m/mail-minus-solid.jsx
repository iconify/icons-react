import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkd9d5s_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkd9d5s_w"/>`,
		"fallback": "iconaut:mail-minus-solid",
	});
}

export default Component;
