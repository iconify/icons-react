import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp-p80w9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp-p80w9m"/>`,
		"fallback": "noviair:phone-call-check",
	});
}

export default Component;
