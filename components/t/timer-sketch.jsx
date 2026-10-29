import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dk6attbxk.css';
import '../../css/k/kbl3vi1qd.css';
import '../../css/b/bv7s2dbhv.css';
import '../../css/b/b20j0mbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dk6attbxk"/><path class="kbl3vi1qd wm-a"/><path class="bv7s2dbhv wm-k"/><path class="b20j0mbzp wm-a"/></g>`,
		"fallback": "withicons:timer-sketch",
	});
}

export default Component;
