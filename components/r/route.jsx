import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ern-01bxx.css';
import '../../css/r/rug5b1b1t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ern-01bxx"/><path class="rug5b1b1t"/>`,
		"fallback": "gis:route",
	});
}

export default Component;
