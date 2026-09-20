import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsx1q7bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsx1q7bdy"/>`,
		"fallback": "reicon:security-safe-filled",
	});
}

export default Component;
