import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/ed9ykjbgu.css';
import '../../css/g/g4tec2bix.css';
import '../../css/l/lnbh4wbxk.css';
import '../../css/n/nuvxv0buf.css';
import '../../css/p/p4efbqbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKZDiwdQA" x1="0" x2="0" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG2tqYebyw" x1="1.5" x2="22.5" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGKZDiwdQA)" stroke="url(#SVG2tqYebyw)" class="ed9ykjbgu wm-k"/><path fill="url(#SVG2tqYebyw)" class="g4tec2bix wm-a"/><path stroke="url(#SVG2tqYebyw)" class="lnbh4wbxk wm-s"/><path class="nuvxv0buf wm-shine"/><path class="p4efbqbdp wm-shine"/></g>`,
		"fallback": "withicons-lunar:users-plus",
	});
}

export default Component;
