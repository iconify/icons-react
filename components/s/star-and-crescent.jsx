import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h241mi4_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h241mi4_l"/>`,
		"fallback": "fa-solid:star-and-crescent",
	});
}

export default Component;
