import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c2tz-blvo.css';
import '../../css/d/diqnbfn6e.css';
import '../../css/s/sl8671byq.css';
import '../../css/o/o5_y4ibrg.css';
import '../../css/w/wffb95w3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c2tz-blvo"/><path class="diqnbfn6e wm-k"/><path class="sl8671byq wm-a"/><path class="o5_y4ibrg wm-k"/><path class="wffb95w3v wm-a"/></g>`,
		"fallback": "withicons:store-sketch",
	});
}

export default Component;
