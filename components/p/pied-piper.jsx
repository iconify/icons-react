import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me1not0hq.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cls-1 me1not0hq"/>`,
		"fallback": "fa-brands:pied-piper",
	});
}

export default Component;
