import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vqi7hhbac.css';
import '../../css/z/zhuynbbbv.css';
import '../../css/y/yra6_ccng.css';
import '../../css/u/ums0lf1sd.css';
import '../../css/s/srpi4abui.css';
import '../../css/y/yfqunmbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="vqi7hhbac"/><path class="zhuynbbbv"/><path class="yra6_ccng"/><path class="ums0lf1sd"/><path class="srpi4abui"/><path class="yfqunmbsq"/></g>`,
		"fallback": "icon-park:solar-energy",
	});
}

export default Component;
