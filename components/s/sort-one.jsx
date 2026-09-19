import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pqqm4uc3z.css';
import '../../css/v/vn2l7rvmc.css';
import '../../css/n/nxkp0lbtk.css';
import '../../css/l/lrv-rp0-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pqqm4uc3z"/><path class="vn2l7rvmc"/><path class="nxkp0lbtk"/><path class="lrv-rp0-f"/></g>`,
		"fallback": "icon-park:sort-one",
	});
}

export default Component;
