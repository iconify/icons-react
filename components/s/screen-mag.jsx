import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2zmswy-h.css';
import '../../css/q/q6tuz1lwf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2zmswy-h"/><path class="q6tuz1lwf"/>`,
		"fallback": "gis:screen-mag",
	});
}

export default Component;
