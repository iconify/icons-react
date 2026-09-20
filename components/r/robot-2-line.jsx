import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxz--3bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxz--3bgx"/>`,
		"fallback": "ri:robot-2-line",
	});
}

export default Component;
