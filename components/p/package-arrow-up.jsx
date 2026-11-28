import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhqu29b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhqu29b3b"/>`,
		"fallback": "noviair:package-arrow-up",
	});
}

export default Component;
