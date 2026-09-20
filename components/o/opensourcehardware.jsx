import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mngl0bcck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mngl0bcck"/>`,
		"fallback": "simple-icons:opensourcehardware",
	});
}

export default Component;
