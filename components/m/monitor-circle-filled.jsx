import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d4uiovtmd.css';
import '../../css/x/xfqauol3x.css';
import '../../css/a/aw5j0obfz.css';
import '../../css/k/ktr_qhbea.css';
import '../../css/o/owa4l2cof.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="d4uiovtmd"/><path class="xfqauol3x"/><path clip-rule="evenodd" class="aw5j0obfz"/><path class="ktr_qhbea"/><path clip-rule="evenodd" class="owa4l2cof"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:monitor-circle-filled",
	});
}

export default Component;
