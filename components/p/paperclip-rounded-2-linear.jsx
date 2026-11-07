import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-z4ujbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-z4ujbsh"/>`,
		"fallback": "solar:paperclip-rounded-2-linear",
	});
}

export default Component;
