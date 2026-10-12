import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k42z9ru9b.css';
import '../../css/j/jwdu1gbfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k42z9ru9b"/><path class="jwdu1gbfm"/>`,
		"fallback": "energy-icons:rabbit-20",
	});
}

export default Component;
