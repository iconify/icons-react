import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nbh0wg0gi.css';
import '../../css/n/nfcb_rb2q.css';
import '../../css/s/soc2g0bzj.css';
import '../../css/m/mno_rjo8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nbh0wg0gi"/><path class="nfcb_rb2q wm-a"/><path class="soc2g0bzj"/><path class="mno_rjo8d"/></g>`,
		"fallback": "withicons:store-duo",
	});
}

export default Component;
