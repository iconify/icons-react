import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd5mx2bxw.css';
import '../../css/f/ffx80zbns.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 sd5mx2bxw"/><path class="clr-i-outline clr-i-outline-path-2 ffx80zbns"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:underline-line",
	});
}

export default Component;
