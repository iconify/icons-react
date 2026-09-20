import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cnfjgmdcb.css';
import '../../css/m/mf0yxrq8v.css';
import '../../css/h/hs9g5acuz.css';
import '../../css/i/iy3mnob7p.css';
import '../../css/e/e-qescbuo.css';
import '../../css/h/huu1r6ztb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="cnfjgmdcb"/><path class="mf0yxrq8v"/><path class="hs9g5acuz"/></g><path class="iy3mnob7p"/><path class="e-qescbuo"/><path class="huu1r6ztb"/></g>`,
		"fallback": "pepicons-print:shuffle",
	});
}

export default Component;
