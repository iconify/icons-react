import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpr2xqb9r.css';
import '../../css/l/ljil1ulcy.css';
import '../../css/g/gu72hccoo.css';
import '../../css/d/dz76f3b5j.css';
import '../../css/s/sbmw1obxp.css';
import '../../css/v/vbia4fbxt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qpr2xqb9r"/><path clip-rule="evenodd" class="ljil1ulcy"/><path class="gu72hccoo"/><path clip-rule="evenodd" class="dz76f3b5j"/><path class="sbmw1obxp"/><path class="vbia4fbxt"/></g>`,
		"fallback": "glyphs:jack-bold",
	});
}

export default Component;
