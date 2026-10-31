import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvyywz4ct.css';
import '../../css/r/rdb9x_bgl.css';
import '../../css/k/kva08pblc.css';
import '../../css/l/lfpoo5_5e.css';
import '../../css/d/dbj84rvqm.css';
import '../../css/k/kwpl44x6w.css';
import '../../css/w/ws10a1b8r.css';
import '../../css/o/ocwa98bzr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvyywz4ct"/><path class="rdb9x_bgl"/><path class="kva08pblc"/><path class="lfpoo5_5e"/><path class="dbj84rvqm"/><path class="kwpl44x6w"/><path class="ws10a1b8r"/><path class="ocwa98bzr"/>`,
		"fallback": "iconito:water",
	});
}

export default Component;
