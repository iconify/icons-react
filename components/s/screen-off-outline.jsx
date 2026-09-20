import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sinukt6es.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sinukt6es"/>`,
		"fallback": "lsicon:screen-off-outline",
	});
}

export default Component;
