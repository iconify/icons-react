import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv2q-whaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv2q-whaf"/>`,
		"fallback": "guidance:left-2-short-arrow",
	});
}

export default Component;
