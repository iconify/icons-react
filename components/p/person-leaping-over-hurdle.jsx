import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5i42c4e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5i42c4e"/>`,
		"fallback": "pinhead:person-leaping-over-hurdle",
	});
}

export default Component;
