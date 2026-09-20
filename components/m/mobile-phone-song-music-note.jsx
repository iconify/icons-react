import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hp4ym_bwi.css';
import '../../css/l/lf_j62awi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hp4ym_bwi"/><path class="lf_j62awi"/></g>`,
		"fallback": "streamline-cyber:mobile-phone-song-music-note",
	});
}

export default Component;
