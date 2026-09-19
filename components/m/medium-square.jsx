import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ekwamnsnd.css';
import '../../css/n/nht6_fbko.css';
import '../../css/l/lmu8d6bcl.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="ekwamnsnd"/><ellipse class="nht6_fbko"/><ellipse class="lmu8d6bcl"/><path class="uztmj3dza"/></g>`,
		"fallback": "hugeicons:medium-square",
	});
}

export default Component;
