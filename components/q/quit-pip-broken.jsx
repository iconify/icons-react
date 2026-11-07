import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jcusk6gmi.css';
import '../../css/m/mqszbo63g.css';
import '../../css/d/dmrtm7e_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jcusk6gmi"/><path class="mqszbo63g"/><path class="dmrtm7e_f"/></g>`,
		"fallback": "solar:quit-pip-broken",
	});
}

export default Component;
