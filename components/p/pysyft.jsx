import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg6a0ckqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg6a0ckqs"/>`,
		"fallback": "simple-icons:pysyft",
	});
}

export default Component;
