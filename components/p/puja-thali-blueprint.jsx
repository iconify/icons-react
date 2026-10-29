import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oqnq33bkc.css';
import '../../css/h/hskfzlbrg.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/g/gknlcviwt.css';
import '../../css/i/ibs3684dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oqnq33bkc wm-deco"/><path class="hskfzlbrg wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="gknlcviwt wm-k"/><path class="ibs3684dw wm-a"/></g>`,
		"fallback": "withicons:puja-thali-blueprint",
	});
}

export default Component;
