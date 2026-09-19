import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbg9o4ilr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbg9o4ilr"/>`,
		"fallback": "gg:pentagon-right",
	});
}

export default Component;
