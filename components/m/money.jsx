import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/br41eactr.css';
import '../../css/s/sqdyffbks.css';
import '../../css/v/vhln7g00p.css';
import '../../css/m/mur8xvbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="br41eactr"/><path class="sqdyffbks"/><path class="vhln7g00p"/><circle class="mur8xvbmw"/></g>`,
		"fallback": "andrsrxn:money",
	});
}

export default Component;
