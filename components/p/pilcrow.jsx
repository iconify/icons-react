import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/tqt8w6bng.css';
import '../../css/z/zjdy4zdux.css';
import '../../css/x/xxyqoebmj.css';
import '../../css/g/g0_ifgbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2H9hDbCR" x1="0" x2="0" y1="2.51" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGcAmSIc2b" x1="5.26" x2="19" y1="2.51" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG2H9hDbCR)" stroke="url(#SVGcAmSIc2b)" class="tqt8w6bng wm-k"/><path fill="url(#SVGcAmSIc2b)" class="wm-a zjdy4zdux"/><path class="wm-shine xxyqoebmj"/><path class="g0_ifgbsh wm-shine"/></g>`,
		"fallback": "withicons-lunar:pilcrow",
	});
}

export default Component;
