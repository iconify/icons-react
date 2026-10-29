import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kfszy2bqf.css';
import '../../css/f/f-hmxdbft.css';
import '../../css/b/bejri_bht.css';
import '../../css/n/n4z21sb7w.css';
import '../../css/o/ondz9cb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kfszy2bqf wm-k"/><path class="f-hmxdbft wm-a"/><path class="bejri_bht wm-shadow"/><path class="n4z21sb7w wm-k"/><path class="ondz9cb4u wm-a"/></g>`,
		"fallback": "withicons:monitor-engrave",
	});
}

export default Component;
