import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rif5jcvyy.css';
import '../../css/z/zsrsrybxe.css';
import '../../css/k/k8ycbgg-m.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rif5jcvyy"/><path class="zsrsrybxe"/><path class="k8ycbgg-m"/></g>`,
		"fallback": "cif:se",
	});
}

export default Component;
