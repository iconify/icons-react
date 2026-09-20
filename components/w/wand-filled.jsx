import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztylrtbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztylrtbjf"/>`,
		"fallback": "reicon:wand-filled",
	});
}

export default Component;
