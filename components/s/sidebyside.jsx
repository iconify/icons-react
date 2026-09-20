import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwqnu5bwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwqnu5bwd"/>`,
		"fallback": "rivet-icons:sidebyside",
	});
}

export default Component;
