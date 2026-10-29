import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i4amvwbwl.css';
import '../../css/f/fvmv82ghl.css';
import '../../css/a/an3h92bpt.css';
import '../../css/z/zlqtewbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i4amvwbwl wm-k"/><path class="fvmv82ghl wm-a"/><path class="an3h92bpt wm-k"/><path class="wm-a zlqtewbnd"/></g>`,
		"fallback": "withicons:language-sketch",
	});
}

export default Component;
