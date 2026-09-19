import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w20knrbfr.css';
import '../../css/d/d9ts1d8vj.css';
import '../../css/y/yhox9bb8k.css';
import '../../css/t/tes603bzx.css';
import '../../css/z/zawu6bbpn.css';
import '../../css/f/fl2da-bdu.css';
import '../../css/t/tig_-fbiw.css';
import '../../css/b/bm4lozefh.css';
import '../../css/w/wn4ydacxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w20knrbfr"/><path class="d9ts1d8vj"/><path class="yhox9bb8k"/><path class="tes603bzx"/><path class="zawu6bbpn"/><path class="fl2da-bdu"/><path class="tig_-fbiw"/><path class="bm4lozefh"/><path class="wn4ydacxz"/>`,
		"fallback": "fxemoji:steamlocomotive",
	});
}

export default Component;
