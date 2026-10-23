import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z2u84ac3q.css';
import '../../css/t/tyzf8r-xo.css';
import '../../css/h/h1fg3fbmj.css';
import '../../css/m/mhv6zkb6v.css';
import '../../css/t/tg6n9uw4h.css';
import '../../css/r/rvesqpb8b.css';
import '../../css/w/wp-91tbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z2u84ac3q"/><path class="tyzf8r-xo"/><path class="h1fg3fbmj"/><path class="mhv6zkb6v"/><path class="tg6n9uw4h"/><path class="rvesqpb8b"/><path class="wp-91tbnf"/></g>`,
		"fallback": "matita:pipette",
	});
}

export default Component;
