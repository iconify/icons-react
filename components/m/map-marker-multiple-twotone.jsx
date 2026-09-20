import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnqksf.css';
import '../../css/g/g_1xrq.css';
import '../../css/n/n8ualj.css';
import '../../css/n/n53t9u.css';
import '../../css/o/oy2y0t.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s8e22g.css';
import '../../css/w/w9fzon.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-48.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQoAwSb1I"><path class="fnqksf g_1xrq n8ualj"/><path class="g_1xrq n53t9u oy2y0t"/></mask></defs><path mask="url(#SVGQoAwSb1I)" class="lsejuv ydovum"/><path class="g_1xrq n53t9u n8ualj s8e22g ydovum"/><circle class="w9fzon ydovum"/>`,
		"fallback": "line-md:map-marker-multiple-twotone",
	});
}

export default Component;
