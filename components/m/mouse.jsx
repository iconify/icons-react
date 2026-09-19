import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc_d--bcm.css';
import '../../css/l/lmcg74bhh.css';
import '../../css/t/t12n55-xl.css';
import '../../css/r/rt044bc1h.css';
import '../../css/b/b_vlnrdwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qc_d--bcm"/><path class="lmcg74bhh"/><path class="t12n55-xl"/><path class="rt044bc1h"/><path class="b_vlnrdwt"/></g>`,
		"fallback": "fluent-emoji-flat:mouse",
	});
}

export default Component;
