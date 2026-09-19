import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrtn-oi6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrtn-oi6n"/>`,
		"fallback": "griddy-icons:timer",
	});
}

export default Component;
