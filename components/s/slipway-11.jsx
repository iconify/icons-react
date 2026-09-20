import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5p3_7hxd.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5p3_7hxd"/>`,
		"fallback": "maki:slipway-11",
	});
}

export default Component;
