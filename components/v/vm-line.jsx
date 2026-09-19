import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c270pqb-c.css';
import '../../css/f/fu3bak12h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c270pqb-c clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 fu3bak12h"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:vm-line",
	});
}

export default Component;
