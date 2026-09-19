import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx-z35byx.css';
import '../../css/r/rug5b1b1t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx-z35byx"/><path class="rug5b1b1t"/>`,
		"fallback": "gis:route-end",
	});
}

export default Component;
