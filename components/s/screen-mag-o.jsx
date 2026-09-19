import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3-kin2ph.css';
import '../../css/q/q6tuz1lwf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3-kin2ph"/><path class="q6tuz1lwf"/>`,
		"fallback": "gis:screen-mag-o",
	});
}

export default Component;
