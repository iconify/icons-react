import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weypos4si.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weypos4si"/>`,
		"fallback": "pinhead:triangular-pill-and-circular-pill-and-capsule-pill",
	});
}

export default Component;
