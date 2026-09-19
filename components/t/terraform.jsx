import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zv06l1bpv.css';
import '../../css/h/hcafqxmbj.css';
import '../../css/k/kdt1gpbcl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zv06l1bpv"/><path class="hcafqxmbj"/><path class="kdt1gpbcl"/></g>`,
		"fallback": "devicon:terraform",
	});
}

export default Component;
