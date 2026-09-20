import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrsk31b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrsk31b-e"/>`,
		"fallback": "thesvg-color:stagetimer",
	});
}

export default Component;
