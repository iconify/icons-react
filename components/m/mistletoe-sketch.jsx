import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jfu-tsbtl.css';
import '../../css/m/mh3_kgpzk.css';
import '../../css/d/dda-ttbbb.css';
import '../../css/n/nasfv3bad.css';
import '../../css/t/tpyqchb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jfu-tsbtl wm-k"/><path class="mh3_kgpzk wm-k"/><circle class="dda-ttbbb wm-s"/><circle class="nasfv3bad wm-s"/><circle class="tpyqchb3u wm-s"/></g>`,
		"fallback": "withicons:mistletoe-sketch",
	});
}

export default Component;
