import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_5ntbol.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/k/k1uq304yb.css';
import '../../css/s/s1j0ejv3d.css';
import '../../css/s/sr1thfbdc.css';
import '../../css/t/tgf6gabxd.css';
import '../../css/b/b5pl07b4j.css';
import '../../css/p/p1o3esbck.css';
import '../../css/w/wcszx1bnm.css';
import '../../css/m/mx-yirm0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5_5ntbol"/><path class="jko7jdb1p"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/><circle class="s1j0ejv3d"/><path class="sr1thfbdc"/><path class="tgf6gabxd"/><path class="b5pl07b4j"/><path class="p1o3esbck"/><path class="wcszx1bnm"/><path class="mx-yirm0r"/></g>`,
		"fallback": "icon-park:setting-web",
	});
}

export default Component;
