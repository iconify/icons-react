import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yhqv48bve.css';
import '../../css/x/x1magxb6p.css';
import '../../css/w/wnjreblij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yhqv48bve"/><path class="wm-shadow x1magxb6p"/><path class="wnjreblij"/></g>`,
		"fallback": "withicons-brutal:waves",
	});
}

export default Component;
