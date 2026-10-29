import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ea84mbb_c.css';
import '../../css/g/gawr9cban.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/p/p05kv_btd.css';
import '../../css/b/bovtacbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ea84mbb_c wm-k"/><path class="gawr9cban wm-shadow"/><path class="wm-k zzgumwbxx"/><path class="p05kv_btd wm-k"/><path class="bovtacbyz wm-a"/></g>`,
		"fallback": "withicons:smartphone-engrave",
	});
}

export default Component;
