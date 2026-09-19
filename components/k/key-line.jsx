import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7alv7cdp.css';
import '../../css/a/ai4y1x-zp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="clr-i-outline clr-i-outline-path-1 g7alv7cdp" transform="rotate(-45 11.192 12.004)"/><path class="ai4y1x-zp clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:key-line",
	});
}

export default Component;
