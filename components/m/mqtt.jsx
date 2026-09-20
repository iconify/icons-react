import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hotaktb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hotaktb8e"/>`,
		"fallback": "simple-icons:mqtt",
	});
}

export default Component;
