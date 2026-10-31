import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lku3-_uqm.css';
import '../../css/r/rr8f6eayr.css';
import '../../css/j/jznreq9gq.css';
import '../../css/x/x7yfx3qpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtWUWzdjN" x1="0" x2="0" y1="2.5" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGdhaLFdQO" x1="1.5" x2="22.48" y1="2.5" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGtWUWzdjN)" stroke="url(#SVGdhaLFdQO)" class="lku3-_uqm wm-k"/><path fill="url(#SVGdhaLFdQO)" class="rr8f6eayr wm-a"/><path class="jznreq9gq wm-shine"/><path class="wm-shine x7yfx3qpw"/></g>`,
		"fallback": "withicons-lunar:taxi",
	});
}

export default Component;
