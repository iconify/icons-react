import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v56jcj3_g.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v56jcj3_g"/>`,
		"fallback": "jam:joystick-f",
	});
}

export default Component;
