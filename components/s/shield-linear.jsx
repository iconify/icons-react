import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eu5pm3tfm.css';
import '../../css/x/x1nfqqbao.css';
import '../../css/q/qg9k3obcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eu5pm3tfm"/><path class="x1nfqqbao"/><path class="qg9k3obcg"/></g>`,
		"fallback": "solar:shield-linear",
	});
}

export default Component;
