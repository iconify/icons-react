import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmpw9tbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmpw9tbkq"/>`,
		"fallback": "keyline-icons:map-pin",
	});
}

export default Component;
