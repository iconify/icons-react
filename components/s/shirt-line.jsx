import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqizjvl4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqizjvl4l"/>`,
		"fallback": "ri:shirt-line",
	});
}

export default Component;
