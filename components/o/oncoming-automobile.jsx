import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ep0osccnx.css';
import '../../css/m/me_6z4ebw.css';
import '../../css/j/js2zvh1ms.css';
import '../../css/v/v_4jehmld.css';
import '../../css/r/r7eodykwx.css';
import '../../css/l/l9ycuqb6q.css';
import '../../css/p/psp0o_bxl.css';
import '../../css/n/nttqfdc3g.css';
import '../../css/b/beh0h1pel.css';
import '../../css/d/dps_qkb2m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ep0osccnx"/><path class="me_6z4ebw"/><path class="js2zvh1ms"/><path class="v_4jehmld"/><path class="r7eodykwx"/><path class="l9ycuqb6q"/><path class="psp0o_bxl"/><path class="nttqfdc3g"/><path class="beh0h1pel"/><path class="dps_qkb2m"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-automobile",
	});
}

export default Component;
