import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/e/euwprk.css';
import '../../css/z/zxndow.css';
import '../../css/r/r8g71q.css';
import '../../css/a/ay17qu.css';
import '../../css/o/oxx-om.css';
import '../../css/u/ux4wzr.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGE5CggUll"><path class="c5xdmn euwprk zxndow"/><path class="r8g71q"/><path class="ay17qu c5xdmn zxndow"/><path class="c5xdmn oxx-om ux4wzr"/></mask></defs><path mask="url(#SVGE5CggUll)" class="botfzx"/><path class="c5xdmn gd_4-q ux4wzr"/>`,
		"fallback": "line-md:monitor-small-off",
	});
}

export default Component;
