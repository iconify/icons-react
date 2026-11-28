import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjhwy-bts.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjhwy-bts"/>`,
		"fallback": "pullo:replay-10-thin",
	});
}

export default Component;
