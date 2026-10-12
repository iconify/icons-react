import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27y9mn1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27y9mn1n"/>`,
		"fallback": "lucide:screw",
	});
}

export default Component;
