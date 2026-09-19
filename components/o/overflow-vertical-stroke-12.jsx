import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc4gbfb1s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc4gbfb1s"/>`,
		"fallback": "garden:overflow-vertical-stroke-12",
	});
}

export default Component;
