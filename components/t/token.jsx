import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp40olbso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp40olbso"/>`,
		"fallback": "ps:token",
	});
}

export default Component;
