import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc7aas1aq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc7aas1aq"/>`,
		"fallback": "roentgen:shield-volcano-smoke-2",
	});
}

export default Component;
