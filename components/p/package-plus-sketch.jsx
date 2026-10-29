import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uewvtng_b.css';
import '../../css/r/rbafv6biv.css';
import '../../css/h/hor61mjfj.css';
import '../../css/s/s286pibas.css';
import '../../css/k/kz7zqp0nk.css';
import '../../css/g/gxzc4wbjj.css';
import '../../css/x/x--wrybuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uewvtng_b"/><path class="rbafv6biv wm-k"/><path class="hor61mjfj wm-a"/><path class="s286pibas wm-s"/><path class="kz7zqp0nk wm-k"/><path class="gxzc4wbjj wm-a"/><path class="wm-s x--wrybuk"/></g>`,
		"fallback": "withicons:package-plus-sketch",
	});
}

export default Component;
