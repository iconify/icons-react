import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-193kzzo.css';
import '../../css/k/k2bm52bee.css';
import '../../css/a/a2r76ac1i.css';
import '../../css/r/r50dsgrpc.css';
import '../../css/a/ay_y5cm-j.css';
import '../../css/l/lm7btrbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-193kzzo"/><path class="k2bm52bee"/><path class="a2r76ac1i"/><path class="r50dsgrpc"/><path class="ay_y5cm-j"/><path class="lm7btrbxj"/></g>`,
		"fallback": "streamline-ultimate-color:view-off",
	});
}

export default Component;
