import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crgdrwxoi.css';
import '../../css/o/o1lu20b4y.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 crgdrwxoi"/><path class="clr-i-outline clr-i-outline-path-2 o1lu20b4y"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:power-line",
	});
}

export default Component;
