import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/f2k1okbqf.css';
import '../../css/g/gl7qccc5f.css';
import '../../css/j/j9rw0tbnd.css';
import '../../css/z/zzvyi8m4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSvmnD49m" x1="0" x2="0" y1="1.3" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGhgUs0cUq" x1="1.52" x2="22.5" y1="1.3" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGSvmnD49m)" stroke="url(#SVGhgUs0cUq)" class="f2k1okbqf wm-k"/><path fill="url(#SVGhgUs0cUq)" class="gl7qccc5f wm-a"/><path class="j9rw0tbnd wm-shine"/><path class="wm-shine zzvyi8m4q"/></g>`,
		"fallback": "withicons-lunar:plane-landing",
	});
}

export default Component;
