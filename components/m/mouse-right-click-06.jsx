import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xi4drrbfn.css';
import '../../css/j/jwjog_-hh.css';
import '../../css/p/pa4chb8un.css';
import '../../css/l/l3ifwhtvx.css';
import '../../css/t/tl18ifjdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xi4drrbfn"/><path class="jwjog_-hh"/><path class="pa4chb8un"/><path class="l3ifwhtvx"/><path class="tl18ifjdf"/></g>`,
		"fallback": "hugeicons:mouse-right-click-06",
	});
}

export default Component;
