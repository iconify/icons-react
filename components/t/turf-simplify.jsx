import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbskly18j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbskly18j"/>`,
		"fallback": "geo:turf-simplify",
	});
}

export default Component;
