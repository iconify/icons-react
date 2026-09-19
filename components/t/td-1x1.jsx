import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1be0yome.css';
import '../../css/r/rw774fujl.css';
import '../../css/k/k6w4hkbjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r1be0yome"/><path class="rw774fujl"/><path class="k6w4hkbjm"/></g>`,
		"fallback": "flag:td-1x1",
	});
}

export default Component;
