import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5t6ee0li.css';
import '../../css/c/c68i7abad.css';
import '../../css/v/vbv9yn3af.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5t6ee0li"/><path class="c68i7abad"/><path class="vbv9yn3af"/>`,
		"fallback": "energy-icons:lawnmower-20",
	});
}

export default Component;
