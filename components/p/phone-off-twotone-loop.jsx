import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9ohnh.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/y/yd_53v.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNPga1Bxn"><path class="b9ohnh t5pxry"/><path class="oxx-om t5pxry yd_53v"/></mask></defs><path mask="url(#SVGNPga1Bxn)" class="botfzx"/><path class="gd_4-q t5pxry yd_53v"/>`,
		"fallback": "line-md:phone-off-twotone-loop",
	});
}

export default Component;
