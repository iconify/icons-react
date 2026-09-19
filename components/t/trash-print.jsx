import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hn-as6b7m.css';
import '../../css/s/szn9-zbto.css';
import '../../css/t/ttjsdwbbs.css';
import '../../css/x/xg7tgyb7v.css';
import '../../css/g/gq_x69oxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><rect class="hn-as6b7m"/><path clip-rule="evenodd" class="szn9-zbto"/></g><path class="ttjsdwbbs"/><path class="xg7tgyb7v"/><path clip-rule="evenodd" class="gq_x69oxs"/></g>`,
		"fallback": "pepicons:trash-print",
	});
}

export default Component;
