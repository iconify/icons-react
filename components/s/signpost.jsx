import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm5ehfbqs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm5ehfbqs"/>`,
		"fallback": "gis:signpost",
	});
}

export default Component;
