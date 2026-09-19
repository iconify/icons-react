import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qj7knv_bc.css';
import '../../css/k/kxjbmwcmx.css';
import '../../css/e/efa-lgbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qj7knv_bc"/><path class="kxjbmwcmx"/><path class="efa-lgbom"/></g>`,
		"fallback": "hugeicons:navigator-01",
	});
}

export default Component;
