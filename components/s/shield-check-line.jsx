import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsyhy6zme.css';
import '../../css/a/ag85robiu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 xsyhy6zme"/><path class="ag85robiu clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shield-check-line",
	});
}

export default Component;
