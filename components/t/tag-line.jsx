import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey47n4bde.css';
import '../../css/a/ayiij3brd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 ey47n4bde"/><path class="ayiij3brd clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tag-line",
	});
}

export default Component;
