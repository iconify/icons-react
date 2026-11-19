import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/blsyrna7o.css';
import '../../css/r/rmnn66tcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="blsyrna7o"/><path class="rmnn66tcc"/></g>`,
		"fallback": "andrsrxn:sound-wave-scan",
	});
}

export default Component;
