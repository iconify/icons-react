import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2hyyzu0p.css';
import '../../css/o/o83obdmlu.css';
import '../../css/x/x1wgfmbaz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 h2hyyzu0p"/><circle class="clr-i-outline clr-i-outline-path-2 o83obdmlu"/><path class="clr-i-outline clr-i-outline-path-3 x1wgfmbaz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:piggy-bank-line",
	});
}

export default Component;
