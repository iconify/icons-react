import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tji5q-s7d.css';
import '../../css/l/lv0bcs_yt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 tji5q-s7d"/><path class="clr-i-outline clr-i-outline-path-2 lv0bcs_yt"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pop-out-line",
	});
}

export default Component;
