import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uv2t8jboo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/gf2kb8bvg.css';
import '../../css/g/gkho1-4zp.css';
import '../../css/h/hgzrf4btz.css';
import '../../css/f/fzthtmvbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uv2t8jboo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="gf2kb8bvg wm-k"/><path class="gkho1-4zp wm-a"/><path class="hgzrf4btz wm-k"/><path class="fzthtmvbv wm-a"/></g>`,
		"fallback": "withicons:shuffle-blueprint",
	});
}

export default Component;
