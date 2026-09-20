import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsw-4vbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsw-4vbcs"/>`,
		"fallback": "reicon:mouse4-filled",
	});
}

export default Component;
