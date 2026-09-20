import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mup8g7b5c.css';
import '../../css/a/ab9dwqbbf.css';
import '../../css/n/nxj38bc5d.css';
import '../../css/a/a5p3e71_q.css';
import '../../css/s/svc080bxp.css';
import '../../css/w/w1jfe9bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mup8g7b5c"/><path class="ab9dwqbbf"/><path class="nxj38bc5d"/><path class="a5p3e71_q"/><path class="svc080bxp"/><path class="w1jfe9bcf"/></g>`,
		"fallback": "streamline-sharp-color:pinwheel",
	});
}

export default Component;
