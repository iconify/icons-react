import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl6vbkbqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl6vbkbqa"/>`,
		"fallback": "pinhead:utility-meter-with-cable",
	});
}

export default Component;
