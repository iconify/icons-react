import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry40d-87g.css';
import '../../css/c/cj-4sbbcy.css';
import '../../css/c/cqj30chyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry40d-87g"/><path class="cj-4sbbcy"/><path class="cqj30chyk"/>`,
		"fallback": "mingcute:palette-line",
	});
}

export default Component;
