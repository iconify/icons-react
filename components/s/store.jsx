import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wyie0wbyv.css';
import '../../css/p/pu4cdrdop.css';
import '../../css/d/dyl8igbkt.css';
import '../../css/z/zhunb4bab.css';
import '../../css/k/kw3e2tn8q.css';
import '../../css/z/z-tr15bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wyie0wbyv"/><path class="pu4cdrdop"/><path class="dyl8igbkt"/><path class="zhunb4bab"/><path class="kw3e2tn8q"/><path class="z-tr15bvq"/></g>`,
		"fallback": "withicons-retro:store",
	});
}

export default Component;
