import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn1whcc4k.css';
import '../../css/b/bbqjb42sc.css';
import '../../css/k/k9bn0_b5b.css';
import '../../css/j/jz0byia2f.css';
import '../../css/h/hrvc-qbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hn1whcc4k"/><path class="bbqjb42sc"/><path class="k9bn0_b5b"/><path class="jz0byia2f"/><path class="hrvc-qbcy"/></g>`,
		"fallback": "andrsrxn:newspaper",
	});
}

export default Component;
