import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uqdxll9yb.css';
import '../../css/i/i4zzprb-l.css';
import '../../css/u/uxgpkm7fp.css';
import '../../css/a/a597htfsc.css';
import '../../css/f/ff84znarb.css';
import '../../css/u/unnk4bcsi.css';
import '../../css/r/r5zc3xnto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uqdxll9yb"/><path class="i4zzprb-l"/><path class="uxgpkm7fp"/><path class="a597htfsc"/><path class="ff84znarb"/><path class="unnk4bcsi"/><path class="r5zc3xnto"/></g>`,
		"fallback": "solar:shock-absorber-linear",
	});
}

export default Component;
