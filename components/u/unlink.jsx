import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/a71ocqyxr.css';
import '../../css/n/nhpmlof0i.css';
import '../../css/n/npx2mgwys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDDW6Ecvq" x1="0" x2="0" y1="1.74" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGbyfJ4bRO" x1="1.74" x2="22.25" y1="1.74" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGDDW6Ecvq)" stroke="url(#SVGbyfJ4bRO)" class="a71ocqyxr wm-k"/><path stroke="url(#SVGbyfJ4bRO)" class="nhpmlof0i wm-s"/><path class="npx2mgwys wm-shine"/></g>`,
		"fallback": "withicons-lunar:unlink",
	});
}

export default Component;
