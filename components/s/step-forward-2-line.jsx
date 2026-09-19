import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5y2-b2m.css';
import '../../css/f/f-4zf_bip.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 cy5y2-b2m"/><path class="clr-i-outline clr-i-outline-path-2 f-4zf_bip"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:step-forward-2-line",
	});
}

export default Component;
