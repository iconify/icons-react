import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6ew29b6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6ew29b6f"/>`,
		"fallback": "garden:phone-call-pause-stroke-16",
	});
}

export default Component;
