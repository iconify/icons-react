import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkntmybbm.css';
import '../../css/l/l5rcylbor.css';
import '../../css/u/uzhgw6bwi.css';
import '../../css/u/uot482hxp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 jkntmybbm"/><path class="clr-i-outline clr-i-outline-path-2 l5rcylbor"/><circle class="clr-i-outline clr-i-outline-path-3 uzhgw6bwi"/><circle class="clr-i-outline clr-i-outline-path-4 uot482hxp"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:neutral-face-line",
	});
}

export default Component;
