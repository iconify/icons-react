import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/u/u0ab-g.css';
import '../../css/o/oxx-om.css';
import '../../css/y/yd_53v.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
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
		"content": `<defs><mask id="SVGQq5DHddH"><path class="t5pxry u0ab-g"/><path class="oxx-om t5pxry yd_53v"/></mask></defs><path mask="url(#SVGQq5DHddH)" class="botfzx"/><path class="gd_4-q t5pxry yd_53v"/>`,
		"fallback": "line-md:phone-off-twotone",
	});
}

export default Component;
