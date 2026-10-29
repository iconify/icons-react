import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4bp63bqf.css';
import '../../css/u/upne6j1lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a x4bp63bqf"/><path class="upne6j1lj wm-k"/>`,
		"fallback": "withicons-bauhaus:sun",
	});
}

export default Component;
