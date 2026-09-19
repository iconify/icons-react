import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd3r8ab0o.css';
import '../../css/h/hfbateitc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 hd3r8ab0o"/><path class="clr-i-outline clr-i-outline-path-2 hfbateitc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:mouse-line",
	});
}

export default Component;
