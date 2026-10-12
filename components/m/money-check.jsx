import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3wrc0bgq.css';
import '../../css/d/drd2qvbta.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/b/bn4-50b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i3wrc0bgq"/><path class="drd2qvbta"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="bn4-50b1z"/></g>`,
		"fallback": "andrsrxn:money-check",
	});
}

export default Component;
