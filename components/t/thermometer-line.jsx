import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jktt-zflc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jktt-zflc"/>`,
		"fallback": "ri:thermometer-line",
	});
}

export default Component;
