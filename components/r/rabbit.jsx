import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zr1w2ccln.css';
import '../../css/m/m5hxkk2rn.css';
import '../../css/s/shbmdrbdo.css';
import '../../css/q/q7huiowpz.css';
import '../../css/l/losrkpbin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="zr1w2ccln"/><circle class="m5hxkk2rn"/><circle class="shbmdrbdo"/><circle class="q7huiowpz"/><path class="losrkpbin"/></g>`,
		"fallback": "icon-park-outline:rabbit",
	});
}

export default Component;
