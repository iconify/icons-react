import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wc5co1b8f.css';
import '../../css/z/zjxy12bcd.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/e/es_79ssst.css';
import '../../css/l/lqdy3rb7m.css';
import '../../css/h/h0g_bvisu.css';
import '../../css/t/taftnbb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wc5co1b8f wm-k"/><path class="wm-a zjxy12bcd"/><path class="ol-kpp5cg wm-s"/><path class="es_79ssst wm-shadow"/><path class="lqdy3rb7m wm-k"/><path class="h0g_bvisu wm-a"/><path class="taftnbb7o wm-s"/></g>`,
		"fallback": "withicons:video-off-engrave",
	});
}

export default Component;
