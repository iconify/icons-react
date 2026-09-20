import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo1bv_b1p.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo1bv_b1p"/>`,
		"fallback": "maki:suitcase-11",
	});
}

export default Component;
