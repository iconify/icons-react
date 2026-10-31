import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sruwfs7vy.css';
import '../../css/c/cc0imbc9c.css';
import '../../css/r/r-e4ysykg.css';
import '../../css/b/btqp048vo.css';
import '../../css/i/iobizabzl.css';
import '../../css/t/ti34zy_zb.css';
import '../../css/z/z5kpatvis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sruwfs7vy wm-shadow"/><path class="cc0imbc9c"/><path class="r-e4ysykg"/><path class="btqp048vo"/><path class="iobizabzl"/><path class="ti34zy_zb"/><path class="wm-s z5kpatvis"/></g>`,
		"fallback": "withicons-retro:smartphone-charging",
	});
}

export default Component;
