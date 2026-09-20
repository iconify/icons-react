import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw4vd6bcb.css';
import '../../css/v/vw9kb-yer.css';
import '../../css/x/xr46l5a6w.css';
import '../../css/p/p03-mobve.css';
import '../../css/v/vu-b-rwdg.css';
import '../../css/n/n2eh01b8x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGhphmYc3G" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%"><stop offset="0%" class="vw4vd6bcb"/><stop offset="60.975%" class="vw9kb-yer"/><stop offset="93.482%" class="xr46l5a6w"/><stop offset="100%" class="p03-mobve"/></radialGradient></defs><path fill="url(#SVGhphmYc3G)" class="vu-b-rwdg"/><path class="n2eh01b8x"/>`,
		"fallback": "thesvg-color:messenger",
	});
}

export default Component;
