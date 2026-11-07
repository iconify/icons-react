import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwoc91b1n.css';
import '../../css/x/x7s65d18e.css';
import '../../css/d/diir2xbcn.css';
import '../../css/f/fvwno1beg.css';
import '../../css/z/zepddnbmb.css';
import '../../css/d/drez-oxbk.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwoc91b1n"/><path clip-rule="evenodd" class="x7s65d18e"/><path class="diir2xbcn"/><path class="fvwno1beg"/><path class="zepddnbmb"/><path class="drez-oxbk"/><path clip-rule="evenodd" class="nbozb93jk"/>`,
		"fallback": "solar:tuning-square-2-outline",
	});
}

export default Component;
