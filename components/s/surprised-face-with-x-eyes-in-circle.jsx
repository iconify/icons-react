import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-__qo4vr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-__qo4vr"/>`,
		"fallback": "pinhead:surprised-face-with-x-eyes-in-circle",
	});
}

export default Component;
