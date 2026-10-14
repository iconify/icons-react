import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xu1gn07mv.css';
import '../../css/r/rcd_5-bdr.css';
import '../../css/w/wogcsmb-x.css';
import '../../css/o/oe9845vhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xu1gn07mv"/><path class="rcd_5-bdr"/><path class="wogcsmb-x"/><path class="oe9845vhp"/></g>`,
		"fallback": "matita:map-pin",
	});
}

export default Component;
