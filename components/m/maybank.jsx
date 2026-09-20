import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm5r9sbus.css';

const viewBox = {"width":1568,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm5r9sbus"/>`,
		"fallback": "thesvg-color:maybank",
	});
}

export default Component;
