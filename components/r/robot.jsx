import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm6orv45l.css';
import '../../css/w/wpycjcc8p.css';
import '../../css/f/fs1i-xbzv.css';
import '../../css/q/qj9lcp8az.css';
import '../../css/b/b4_iq75ad.css';
import '../../css/y/ymd90j6dp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pm6orv45l"/><path clip-rule="evenodd" class="wpycjcc8p"/><rect class="fs1i-xbzv"/><path clip-rule="evenodd" class="qj9lcp8az"/><rect class="b4_iq75ad"/><path class="ymd90j6dp"/></g>`,
		"fallback": "glyphs-poly:robot",
	});
}

export default Component;
