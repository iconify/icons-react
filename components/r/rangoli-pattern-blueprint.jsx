import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/a/ayxxm_17i.css';
import '../../css/w/w0z764b_j.css';
import '../../css/f/f5kdtbghc.css';
import '../../css/r/r62ao_baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="ayxxm_17i wm-deco"/><path class="w0z764b_j wm-k"/><circle class="f5kdtbghc wm-a"/><path class="r62ao_baw wm-a"/></g>`,
		"fallback": "withicons:rangoli-pattern-blueprint",
	});
}

export default Component;
