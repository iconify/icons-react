import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3c3bj8tj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3c3bj8tj"/>`,
		"fallback": "pinhead:traffic-cone-and-question-mark",
	});
}

export default Component;
