import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0_qlsbau.css';
import '../../css/n/nsxqd3bqb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 x0_qlsbau"/><path class="clr-i-outline clr-i-outline-path-2 nsxqd3bqb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:lock-line",
	});
}

export default Component;
