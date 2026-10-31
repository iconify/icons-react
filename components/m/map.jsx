import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/pb8wi8b7h.css';
import '../../css/q/qgi2fq28q.css';
import '../../css/g/gzha2cb6r.css';
import '../../css/v/vqaww3bjl.css';
import '../../css/c/ca6clqbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="pb8wi8b7h wm-k"/><path class="qgi2fq28q wm-deco"/><path class="gzha2cb6r wm-k"/><path fill="url(#SVGH854iddR)" class="vqaww3bjl wm-k"/><path class="ca6clqbos wm-shadow"/></g>`,
		"fallback": "withicons-valentine:map",
	});
}

export default Component;
