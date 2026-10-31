import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vywim1bhw.css';
import '../../css/h/hjichzwjq.css';
import '../../css/l/laha_xb_b.css';
import '../../css/i/i1qvxj_7n.css';
import '../../css/j/jj--8fb-x.css';
import '../../css/g/g1miyx5wu.css';
import '../../css/r/ripohpl7i.css';
import '../../css/g/gsfv0tbmi.css';
import '../../css/k/kjrhk4s6f.css';
import '../../css/u/uqj349byz.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="vywim1bhw"/><path class="hjichzwjq"/><path class="laha_xb_b"/><path class="i1qvxj_7n"/><path class="jj--8fb-x"/><path class="g1miyx5wu"/><path class="ripohpl7i"/><path class="gsfv0tbmi"/><path class="kjrhk4s6f"/><path class="uqj349byz"/></g>`,
		"fallback": "cif:mz",
	});
}

export default Component;
