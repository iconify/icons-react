import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsx7mlbfl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsx7mlbfl"/>`,
		"fallback": "f7:videocam-fill",
	});
}

export default Component;
