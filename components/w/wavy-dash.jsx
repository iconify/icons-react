import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ti3obmt.css';
import '../../css/m/mef0poblo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ti3obmt"/><path class="mef0poblo"/>`,
		"fallback": "openmoji:wavy-dash",
	});
}

export default Component;
