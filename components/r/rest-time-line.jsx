import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jowrko3lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jowrko3lu"/>`,
		"fallback": "ri:rest-time-line",
	});
}

export default Component;
