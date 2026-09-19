import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5rcylbor.css';
import '../../css/f/f5v57gbdv.css';
import '../../css/e/erjzr4f8q.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l5rcylbor"/><path class="clr-i-outline clr-i-outline-path-2 f5v57gbdv"/><path class="clr-i-outline clr-i-outline-path-3 erjzr4f8q"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:target-line",
	});
}

export default Component;
