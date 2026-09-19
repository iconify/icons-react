import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oav658bbz.css';
import '../../css/v/v7yi4gwmc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 oav658bbz"/><path class="clr-i-outline clr-i-outline-path-2 v7yi4gwmc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:sign-out-line",
	});
}

export default Component;
