import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vie_4_2vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vie_4_2vx"/>`,
		"fallback": "iconoir:rounded-mirror",
	});
}

export default Component;
