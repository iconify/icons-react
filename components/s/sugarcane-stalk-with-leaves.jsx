import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-r4blpba.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-r4blpba"/>`,
		"fallback": "pinhead:sugarcane-stalk-with-leaves",
	});
}

export default Component;
