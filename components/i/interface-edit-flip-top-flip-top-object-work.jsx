import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o37q_zbho.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o37q_zbho"/>`,
		"fallback": "streamline:interface-edit-flip-top-flip-top-object-work",
	});
}

export default Component;
