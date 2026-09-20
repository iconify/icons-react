import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4ie978fy.css';
import '../../css/s/si4ma1_ob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4ie978fy"/><path class="si4ma1_ob"/>`,
		"fallback": "selfhst:quickstack",
	});
}

export default Component;
