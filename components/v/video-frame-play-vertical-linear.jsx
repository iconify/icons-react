import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/r/r_0pl6b2k.css';
import '../../css/t/txon6o65c.css';
import '../../css/j/jwwkwcchh.css';
import '../../css/u/uhck3lx6y.css';
import '../../css/d/d7k56tgtd.css';
import '../../css/x/xiwqv5b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="r_0pl6b2k"/><path class="txon6o65c"/><path class="jwwkwcchh"/><path class="uhck3lx6y"/><path class="d7k56tgtd"/><path class="xiwqv5b8r"/></g>`,
		"fallback": "solar:video-frame-play-vertical-linear",
	});
}

export default Component;
