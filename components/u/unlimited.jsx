import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxjc86b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxjc86b1w"/>`,
		"fallback": "reicon:unlimited",
	});
}

export default Component;
