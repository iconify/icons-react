import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5rcylbor.css';
import '../../css/u/uzhgw6bwi.css';
import '../../css/j/jdn2u3u4j.css';
import '../../css/s/s8a7877lb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l5rcylbor"/><circle class="clr-i-outline clr-i-outline-path-2 uzhgw6bwi"/><circle class="clr-i-outline clr-i-outline-path-3 jdn2u3u4j"/><path class="clr-i-outline clr-i-outline-path-4 s8a7877lb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:sad-face-line",
	});
}

export default Component;
