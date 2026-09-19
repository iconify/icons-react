import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1z3g4b5v.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1z3g4b5v"/>`,
		"fallback": "zmdi:phone-in-talk",
	});
}

export default Component;
