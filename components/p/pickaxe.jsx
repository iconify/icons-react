import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/x72_2hbfp.css';
import '../../css/q/qa91cg9yz.css';
import '../../css/o/oqu80hbcy.css';
import '../../css/m/m034-moor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGi6sdVbaw" x1="0" x2="0" y1="2.55" y2="21.77" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGaJLv5GpP" x1="2.73" x2="21.94" y1="2.55" y2="21.77" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGi6sdVbaw)" stroke="url(#SVGaJLv5GpP)" class="wm-k x72_2hbfp"/><path fill="url(#SVGaJLv5GpP)" class="qa91cg9yz wm-a"/><path class="oqu80hbcy wm-shine"/><path class="m034-moor wm-shine"/></g>`,
		"fallback": "withicons-lunar:pickaxe",
	});
}

export default Component;
