import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjh1sbbsy.css';
import '../../css/i/ina-j_cjo.css';
import '../../css/z/zgwjpbbox.css';
import '../../css/p/pyjezxbzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjh1sbbsy"/><path class="ina-j_cjo"/><path class="zgwjpbbox"/><path class="pyjezxbzm"/></g>`,
		"fallback": "streamline-flex-color:iris-scan",
	});
}

export default Component;
