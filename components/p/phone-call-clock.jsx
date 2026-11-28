import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhc8oxb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhc8oxb3l"/>`,
		"fallback": "noviair-light:phone-call-clock",
	});
}

export default Component;
