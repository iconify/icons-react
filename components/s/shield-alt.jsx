import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve4n1njjd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve4n1njjd"/>`,
		"fallback": "cil:shield-alt",
	});
}

export default Component;
