import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3wuugj7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3wuugj7j"/>`,
		"fallback": "pinhead:utility-device",
	});
}

export default Component;
