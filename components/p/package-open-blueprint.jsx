import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n5r0wjbqn.css';
import '../../css/c/c4z69x9xb.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/g/gx_6mxvms.css';
import '../../css/d/duin91atl.css';
import '../../css/c/ce9t0dbkk.css';
import '../../css/a/adpm_cwez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n5r0wjbqn wm-deco"/><path class="c4z69x9xb wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="gx_6mxvms wm-k"/><path class="duin91atl wm-a"/><path class="ce9t0dbkk wm-k"/><path class="adpm_cwez wm-a"/></g>`,
		"fallback": "withicons:package-open-blueprint",
	});
}

export default Component;
