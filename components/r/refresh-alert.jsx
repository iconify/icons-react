import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lj23aebvq.css';
import '../../css/x/xjc9s-bmu.css';
import '../../css/n/nxp26_bnf.css';
import '../../css/x/xqdgfebhz.css';
import '../../css/k/kl24nou1s.css';
import '../../css/e/eax49yc6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lj23aebvq"/><path class="xjc9s-bmu"/><path class="nxp26_bnf"/><path class="xqdgfebhz"/><path class="kl24nou1s"/><path class="eax49yc6r"/></g>`,
		"fallback": "iconaut:refresh-alert",
	});
}

export default Component;
