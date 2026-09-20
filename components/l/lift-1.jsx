import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bqgw1lbjy.css';
import '../../css/f/fqvkhg-ce.css';
import '../../css/g/gv-44ob-y.css';
import '../../css/p/pjrvv3c_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bqgw1lbjy"/><path class="fqvkhg-ce"/><path class="gv-44ob-y"/><path class="pjrvv3c_e"/></g>`,
		"fallback": "streamline-ultimate:lift-1",
	});
}

export default Component;
