import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4p14_bkx.css';
import '../../css/p/pacy82nug.css';
import '../../css/x/xftc_vblp.css';
import '../../css/k/kpc_4jb4q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4p14_bkx"/><path class="pacy82nug"/><path class="xftc_vblp"/><path class="kpc_4jb4q"/>`,
		"fallback": "energy-icons:load-cell-20-bold",
	});
}

export default Component;
