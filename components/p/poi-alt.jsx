import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oit-hng_r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oit-hng_r"/>`,
		"fallback": "gis:poi-alt",
	});
}

export default Component;
