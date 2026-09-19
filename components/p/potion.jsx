import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hsns6vnxj.css';
import '../../css/v/v9il_wb-q.css';
import '../../css/o/otrky1bug.css';
import '../../css/r/r28f_p9ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hsns6vnxj"/><path class="v9il_wb-q"/><path class="otrky1bug"/><path class="r28f_p9ce"/></g>`,
		"fallback": "iconoir:potion",
	});
}

export default Component;
