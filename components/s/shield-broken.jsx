import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1nfqqbao.css';
import '../../css/q/qg9k3obcg.css';
import '../../css/m/m9m9yv8br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x1nfqqbao"/><path class="qg9k3obcg"/><path class="m9m9yv8br"/></g>`,
		"fallback": "solar:shield-broken",
	});
}

export default Component;
