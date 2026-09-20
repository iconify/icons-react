import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/i/i84y_l.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zokflo.css';
import '../../css/x/xgpo5m.css';
import '../../css/k/kcp9vp.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOGnxDcHw"><path class="g26hbu i84y_l t5pxry"/><path class="g26hbu zokflo"/><path class="g26hbu xgpo5m"/><path class="kcp9vp oxx-om t5pxry"/></mask></defs><path mask="url(#SVGOGnxDcHw)" class="botfzx"/><path class="gd_4-q kcp9vp t5pxry"/>`,
		"fallback": "line-md:moon-off-filled",
	});
}

export default Component;
