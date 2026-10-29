import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/ps_iqbbjk.css';
import '../../css/n/ncja3g58k.css';
import '../../css/s/smuuuh87u.css';
import '../../css/y/yhnetzb3t.css';
import '../../css/k/kz28c1hto.css';
import '../../css/d/dlm7yr8dw.css';
import '../../css/w/wjyb9z-mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ps_iqbbjk"/><path class="ncja3g58k wm-k"/><path class="smuuuh87u wm-a"/><path class="wm-s yhnetzb3t"/><path class="kz28c1hto wm-k"/><path class="dlm7yr8dw wm-a"/><path class="wjyb9z-mn wm-s"/></g>`,
		"fallback": "withicons:users-plus-sketch",
	});
}

export default Component;
