import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfo2a7bug.css';
import '../../css/x/xnnzndbop.css';
import '../../css/h/hemw72bsk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfo2a7bug"/><path class="xnnzndbop"/><path class="hemw72bsk"/>`,
		"fallback": "vaadin:invoice",
	});
}

export default Component;
