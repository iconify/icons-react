import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-ep33b6r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-ep33b6r"/>`,
		"fallback": "fluent-mdl2:timeline-progress",
	});
}

export default Component;
