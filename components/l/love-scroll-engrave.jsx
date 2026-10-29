import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gj14zcz_s.css';
import '../../css/r/rr0xombdn.css';
import '../../css/o/o9xa_6bur.css';
import '../../css/v/vnuceub7r.css';
import '../../css/h/hbohdyb1x.css';
import '../../css/i/izocahotk.css';
import '../../css/n/npdbqluyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gj14zcz_s wm-k"/><path class="rr0xombdn wm-s"/><path class="o9xa_6bur wm-shadow"/><path class="vnuceub7r wm-k"/><path class="hbohdyb1x wm-a"/><path class="izocahotk wm-s"/><path class="npdbqluyk wm-a"/></g>`,
		"fallback": "withicons:love-scroll-engrave",
	});
}

export default Component;
