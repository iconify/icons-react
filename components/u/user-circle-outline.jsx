import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo-q0jb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo-q0jb3s"/>`,
		"fallback": "mdi:user-circle-outline",
	});
}

export default Component;
