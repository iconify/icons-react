import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddrm6bcmm.css';
import '../../css/c/c2vwslboc.css';
import '../../css/s/sqshzyb8h.css';
import '../../css/k/k7z_i8byg.css';
import '../../css/o/ovd1s6bpm.css';
import '../../css/n/n8efbjbkf.css';
import '../../css/f/fui4juf2y.css';
import '../../css/u/ujyhtb_ds.css';
import '../../css/j/jdq7jhb-v.css';
import '../../css/q/quo27lb3i.css';
import '../../css/p/pokrl9boc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddrm6bcmm"/><path class="c2vwslboc"/><path class="sqshzyb8h"/><circle class="k7z_i8byg"/><path class="ovd1s6bpm"/><path class="n8efbjbkf"/><ellipse class="fui4juf2y"/><ellipse class="ujyhtb_ds"/><circle class="jdq7jhb-v"/><path class="quo27lb3i"/><path class="pokrl9boc"/>`,
		"fallback": "flag:nc-4x3",
	});
}

export default Component;
