import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh5-28bek.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/p/pi2xzdbqy.css';
import '../../css/o/ohm10wuwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lh5-28bek"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><rect class="pi2xzdbqy"/><path class="ohm10wuwo"/></g>`,
		"fallback": "andrsrxn:lock-circle",
	});
}

export default Component;
