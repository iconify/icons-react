import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps5rjqboi.css';
import '../../css/j/ja_rftbhz.css';
import '../../css/i/ieqwf_b3i.css';
import '../../css/o/out38achs.css';
import '../../css/l/lt975rbhk.css';
import '../../css/v/virrjhb7q.css';
import '../../css/g/gq0yjrb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGqOIYjbHp" cx="-475.865" cy="-11.075" r=".558" gradientTransform="matrix(1713.25 0 0 1560.3101 815830.375 17038.252)" gradientUnits="userSpaceOnUse"><stop offset=".556" class="ps5rjqboi"/><stop offset="1" class="ja_rftbhz"/></radialGradient><path fill="url(#SVGqOIYjbHp)" class="ieqwf_b3i"/><linearGradient id="SVGfgccue5f" x1="-4.504" x2="629.689" y1="80.554" y2="783.296" gradientTransform="translate(0 -256)" gradientUnits="userSpaceOnUse"><stop offset="0" class="out38achs"/><stop offset=".359" class="lt975rbhk"/><stop offset="1" class="virrjhb7q"/></linearGradient><path fill="url(#SVGfgccue5f)" class="gq0yjrb6d"/>`,
		"fallback": "selfhst:proton-drive",
	});
}

export default Component;
