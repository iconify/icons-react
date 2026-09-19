import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3y7vob_d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3y7vob_d"/>`,
		"fallback": "fa-brands:twitter-square",
	});
}

export default Component;
