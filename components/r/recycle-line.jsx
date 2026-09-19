import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpwrgmboq.css';
import '../../css/x/xv2a8c3hx.css';
import '../../css/l/l6u5li4qx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 rpwrgmboq"/><path class="clr-i-outline clr-i-outline-path-2 xv2a8c3hx"/><path class="clr-i-outline clr-i-outline-path-3 l6u5li4qx"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:recycle-line",
	});
}

export default Component;
