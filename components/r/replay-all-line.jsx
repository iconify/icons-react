import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw-k6c1ad.css';
import '../../css/t/tpzq2ccev.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 sw-k6c1ad"/><path class="clr-i-outline clr-i-outline-path-2 tpzq2ccev"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:replay-all-line",
	});
}

export default Component;
