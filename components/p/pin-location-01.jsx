import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/c/cy50z2-cm.css';
import '../../css/e/e-zqnqb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="tcwe4ewrv"/><path class="cy50z2-cm"/><path class="e-zqnqb2e"/></g>`,
		"fallback": "hugeicons:pin-location-01",
	});
}

export default Component;
