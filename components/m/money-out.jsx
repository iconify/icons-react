import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjuhq0fek.css';
import '../../css/j/jj8onj9ce.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/o/ob2ia6vxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bjuhq0fek"/><path class="jj8onj9ce"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="ob2ia6vxf"/></g>`,
		"fallback": "andrsrxn:money-out",
	});
}

export default Component;
