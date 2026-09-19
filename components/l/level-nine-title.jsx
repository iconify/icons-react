import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tayw9ow_b.css';
import '../../css/e/e3cs6jpyd.css';
import '../../css/v/vp_gxl_wh.css';
import '../../css/t/tz7d1-_vz.css';
import '../../css/y/yljuc-cqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="tayw9ow_b"/><path class="e3cs6jpyd"/><path class="vp_gxl_wh"/><path class="tz7d1-_vz"/><path class="yljuc-cqs"/></g>`,
		"fallback": "icon-park:level-nine-title",
	});
}

export default Component;
